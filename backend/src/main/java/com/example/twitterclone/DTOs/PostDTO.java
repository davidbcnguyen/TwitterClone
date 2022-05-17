package com.example.twitterclone.DTOs;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class PostDTO {
    private Long id;
    private String body;
    private String author;
    private final LocalDateTime createdAt;
}