package com.example.twitterclone.Repositories;

import java.util.List;

import com.example.twitterclone.Entities.Post;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

public interface PostRepository extends JpaRepository<Post, Long> {
    @Query("SELECT p FROM post p WHERE author_name IN (SELECT followee_name FROM follow WHERE follower_name = ?1)")
    List<Post> getFollowedPosts(String username);
}
