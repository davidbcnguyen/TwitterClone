package com.example.twitterclone.DTOs;

import java.time.LocalDateTime;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class PostDTO {
    private Long id;
    private String body;
    private String author;
    private LocalDateTime createdAt;
}