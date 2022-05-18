package com.example.twitterclone.DTOs;

import java.time.LocalDateTime;

import lombok.Data;

@Data
public class PosterDTO {
    private String username;
    private LocalDateTime createdAt;
}
