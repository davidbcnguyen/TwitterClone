package com.example.twitterclone.Controllers;

import java.security.Principal;
import java.util.List;
import java.util.stream.Collectors;

import com.example.twitterclone.Configuration.SecurityConstants;
import com.example.twitterclone.CreateRequests.FollowCreateRequest;
import com.example.twitterclone.CreateRequests.PosterCreateRequest;
import com.example.twitterclone.DTOs.PosterDTO;
import com.example.twitterclone.DTOs.PosterDTOWithPosts;
import com.example.twitterclone.Entities.Poster;
import com.example.twitterclone.Services.PosterService;

import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
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

    @PostMapping("/login")
    public String login(@RequestBody PosterCreateRequest credentials) {
        throw new IllegalStateException("This method shouldn't be called. It's implemented by Spring Security Filters");
    }

    @Operation(security = { @SecurityRequirement(name = SecurityConstants.SECURITY_REQUIREMENT) })
    @GetMapping("/relog")
    public String relog(Principal principal) {
        return principal.getName();
    }

    @Operation(security = { @SecurityRequirement(name = SecurityConstants.SECURITY_REQUIREMENT) })
    @GetMapping(path = "/follow")
    public List<String> getFollowings(Principal principal) {
        String username = principal.getName();
        return posterService.getFollowings(username);
    }

    @Operation(security = { @SecurityRequirement(name = SecurityConstants.SECURITY_REQUIREMENT) })
    @PostMapping(path = "/follow")
    public PosterDTOWithPosts createFollow(Principal principal, @RequestBody FollowCreateRequest followCreateRequest) {
        String username = principal.getName();
        Poster follower = posterService.createFollow(username, followCreateRequest);
        return convertToDTOWithPosts(follower);
    }

    @Operation(security = { @SecurityRequirement(name = SecurityConstants.SECURITY_REQUIREMENT) })
    @DeleteMapping(path = "/follow")
    public PosterDTOWithPosts deleteFollow(Principal principal, @RequestBody FollowCreateRequest followDeleteRequest) {
        String username = principal.getName();
        Poster follower = posterService.deleteFollow(username, followDeleteRequest);
        return convertToDTOWithPosts(follower);
    }

    @Operation(security = { @SecurityRequirement(name = SecurityConstants.SECURITY_REQUIREMENT) })
    @GetMapping("/{username}")
    public PosterDTOWithPosts getPoster(@PathVariable String username) {
        return convertToDTOWithPosts(posterService.getUserByUsername(username));
    }

    @Operation(security = { @SecurityRequirement(name = SecurityConstants.SECURITY_REQUIREMENT) })
    @GetMapping
    public List<PosterDTO> getPosters(@RequestParam(defaultValue = "") String query) {
        if (query.length() > 0) {
            return posterService.searchUsername(query).stream().map(this::convertToDTO).collect(Collectors.toList());
        } else {
            return posterService.getAll().stream().map(this::convertToDTO).collect(Collectors.toList());
        }
    }

    private PosterDTOWithPosts convertToDTOWithPosts(Poster poster) {
        return modelMapper.map(poster, PosterDTOWithPosts.class);
    }

    private PosterDTO convertToDTO(Poster poster) {
        return modelMapper.map(poster, PosterDTO.class);
    }
}
