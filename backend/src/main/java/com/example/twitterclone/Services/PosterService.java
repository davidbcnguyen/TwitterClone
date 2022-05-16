package com.example.twitterclone.Services;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import com.example.twitterclone.CreateRequests.FollowCreateRequest;
import com.example.twitterclone.CreateRequests.PosterCreateRequest;
import com.example.twitterclone.Entities.Poster;
import com.example.twitterclone.Repositories.PosterRepository;

import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PosterService {
    private final PosterRepository posterRepository;
    private final BCryptPasswordEncoder passwordEncoder;

    public Poster getUserByUsername(String username) {
        return posterRepository.findByUsername(username).orElseThrow(EntityNotFoundException::new);
    }

    public List<Poster> getAll() {
        return posterRepository.findAll();
    }

    public Poster createPoster(PosterCreateRequest posterCreateRequest) {
        Poster poster = new Poster();
        Optional<Poster> byUsername = posterRepository.findByUsername(posterCreateRequest.getUsername());
        if (byUsername.isPresent()) {
            throw new RuntimeException("User already registered");
        }
        poster.setUsername(posterCreateRequest.getUsername());
        poster.setPassword(passwordEncoder.encode(posterCreateRequest.getPassword()));
        posterRepository.save(poster);
        return poster;
    }

    public Poster createFollow(String username, FollowCreateRequest followCreateRequest) {
        Optional<Poster> byUsername = posterRepository.findByUsername(followCreateRequest.getFollowee_username());
        if (byUsername.isEmpty()) {
            throw new RuntimeException("User not found");
        }
        Poster followee = byUsername.get();
        byUsername = posterRepository.findByUsername(username);
        if (byUsername.isEmpty()) {
            throw new RuntimeException("User not found");
        }
        Poster follower = byUsername.get();
        follower.getFollowings().add(followee);
        posterRepository.save(follower);
        return follower;
    }
}
