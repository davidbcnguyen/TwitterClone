package com.example.twitterclone.Repositories;

import java.util.Optional;

import com.example.twitterclone.Entities.Poster;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PosterRepository extends JpaRepository<Poster, Long> {
    Optional<Poster> findByUsername(String username);

    @Query("SELECT followee_name FROM follow WHERE follower_name = ?1")
    Optional<String> getFollowees(String username);
}
