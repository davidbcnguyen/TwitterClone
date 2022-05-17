package com.example.twitterclone.DTOs;

import java.util.Collections;
import java.util.List;

import lombok.Data;

@Data
public class PosterDTOWithPosts extends PosterDTO {
    private List<PostDTO> posts = Collections.emptyList();
}
