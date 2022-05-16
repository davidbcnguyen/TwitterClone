package com.example.twitterclone.Repositories;

import java.util.Optional;

import com.example.twitterclone.Entities.Poster;

import org.springframework.data.jpa.repository.JpaRepository;

public interface PosterRepository extends JpaRepository<Poster, Long> {
    Optional<Poster> findByUsername(String username);
}
