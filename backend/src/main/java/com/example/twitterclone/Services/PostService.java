package com.example.twitterclone.Services;

import java.util.List;

import com.example.twitterclone.Entities.Post;
import com.example.twitterclone.Repositories.PostRepository;

import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PostService {
    private final PostRepository postRepository;

    public List<Post> getFeed(String username) {
        return postRepository.getFollowedPosts(username);
    }

    public List<Post> getFeed(Long id) {
        return postRepository.getFollowedPosts(id);
    }
}
