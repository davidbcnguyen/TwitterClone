package com.example.twitterclone.Services;

import java.util.List;

import javax.persistence.EntityNotFoundException;

import com.example.twitterclone.Entities.Poster;
import com.example.twitterclone.Repositories.PosterRepository;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PosterService {
    private final PosterRepository posterRepository;

    public Poster readUserByUsername(String username) {
        return posterRepository.findByUsername(username).orElseThrow(EntityNotFoundException::new);
    }

    public List<Poster> getAll() {
        return posterRepository.findAll();
    }
}
