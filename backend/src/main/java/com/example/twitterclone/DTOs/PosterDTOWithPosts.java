package com.example.twitterclone.DTOs;

import java.util.List;

import lombok.Data;

@Data
public class PosterDTOWithPosts extends PostDTO {
    private List<PostDTO> posts;
}
