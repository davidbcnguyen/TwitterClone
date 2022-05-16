package com.example.twitterclone.Controllers;

import java.security.Principal;
import java.util.List;
import java.util.stream.Collectors;

import com.example.twitterclone.Configuration.SecurityConstants;
import com.example.twitterclone.CreateRequests.PostCreateRequest;
import com.example.twitterclone.DTOs.PostDTO;
import com.example.twitterclone.Entities.Post;
import com.example.twitterclone.Services.PostService;

import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.swagger.v3.oas.annotations.Operation;
import io.swagger.v3.oas.annotations.security.SecurityRequirement;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(value = "/api/post")
@RequiredArgsConstructor
public class PostController {
    private final PostService postService;
    private final ModelMapper modelMapper;

    @Operation(security = { @SecurityRequirement(name = SecurityConstants.SECURITY_REQUIREMENT) })
    @PostMapping
    public PostDTO createPost(Principal principal, @RequestBody PostCreateRequest postCreateRequest) {
        String username = principal.getName();
        Post createdPost = postService.createPost(username, postCreateRequest);
        return convertToDTO(createdPost);
    }

    @Operation(security = { @SecurityRequirement(name = SecurityConstants.SECURITY_REQUIREMENT) })
    @GetMapping("/{id}")
    public PostDTO getPost(@PathVariable Long id) {
        return convertToDTO(postService.get(id));
    }

    @Operation(security = { @SecurityRequirement(name = SecurityConstants.SECURITY_REQUIREMENT) })
    @GetMapping
    public List<PostDTO> getPosts() {
        return postService.getAll().stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    @Operation(security = { @SecurityRequirement(name = SecurityConstants.SECURITY_REQUIREMENT) })
    @GetMapping(path = "/feed")
    public List<PostDTO> getFeed(Principal principal) {
        String username = principal.getName();
        return postService.getFeed(username).stream().map(this::convertToDTO).collect(Collectors.toList());
    }

    private PostDTO convertToDTO(Post post) {
        return modelMapper.map(post, PostDTO.class);
    }
}
