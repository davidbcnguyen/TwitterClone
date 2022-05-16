package com.example.twitterclone.Repositories;

import java.util.List;

import com.example.twitterclone.Entities.Post;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PostRepository extends JpaRepository<Post, Long> {
    @Query("SELECT p FROM post p WHERE author_id IN (SELECT followee_id FROM follow WHERE follower_id = (SELECT id FROM poster WHERE username = ?1))")
    List<Post> getFollowedPosts(String username);

    @Query("SELECT p FROM post p WHERE author_id IN (SELECT followee_id FROM follow WHERE follower_id = ?1)")
    List<Post> getFollowedPosts(Long id);
}
