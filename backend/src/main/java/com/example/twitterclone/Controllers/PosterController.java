package com.example.twitterclone.Controllers;

import java.security.Principal;
import java.util.List;
import java.util.stream.Collectors;

import com.example.twitterclone.CreateRequests.FollowCreateRequest;
import com.example.twitterclone.CreateRequests.PosterCreateRequest;
import com.example.twitterclone.DTOs.PosterDTO;
import com.example.twitterclone.DTOs.PosterDTOWithPosts;
import com.example.twitterclone.Entities.Poster;
import com.example.twitterclone.Services.PosterService;

import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(value = "/api/poster")
@RequiredArgsConstructor
public class PosterController {
    private final PosterService posterService;
    private final ModelMapper modelMapper;

    @PostMapping
    public PosterDTOWithPosts createPoster(@RequestBody PosterCreateRequest posterCreateRequest) {
        Poster createdPoster = posterService.createPoster(posterCreateRequest);
        return convertToDTOWithPosts(createdPoster);
    }

    @PostMapping(path = "/follow")
    public PosterDTOWithPosts createFollow(Principal principal, @RequestBody FollowCreateRequest followCreateRequest) {
        String username = principal.getName();
        Poster follower = posterService.createFollow(username, followCreateRequest);
        return convertToDTOWithPosts(follower);
    }

    @GetMapping("/{username}")
    public PosterDTOWithPosts getPoster(@PathVariable String username) {
        return convertToDTOWithPosts(posterService.getUserByUsername(username));
    }

    @GetMapping
    public List<PosterDTO> getPosters() {
        return posterService.getAll().stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    private PosterDTOWithPosts convertToDTOWithPosts(Poster poster) {
        return modelMapper.map(poster, PosterDTOWithPosts.class);
    }

    private PosterDTO convertToDTO(Poster poster) {
        return modelMapper.map(poster, PosterDTO.class);
    }
}
