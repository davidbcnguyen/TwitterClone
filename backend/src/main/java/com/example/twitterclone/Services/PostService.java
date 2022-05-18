package com.example.twitterclone.Services;

import java.util.List;
import java.util.Optional;

import javax.persistence.EntityNotFoundException;

import com.example.twitterclone.CreateRequests.PostCreateRequest;
import com.example.twitterclone.Entities.Post;
import com.example.twitterclone.Entities.Poster;
import com.example.twitterclone.Repositories.PostRepository;
import com.example.twitterclone.Repositories.PosterRepository;

import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class PostService {
    private final PosterRepository posterRepository;
    private final PostRepository postRepository;

    public Post createPost(String username, PostCreateRequest postCreateRequest) {
        Optional<Poster> byUsername = posterRepository.findByUsername(username);
        if (byUsername.isEmpty()) {
            throw new RuntimeException("User doesn't exist");
        }
        Post post = new Post();
        post.setBody(postCreateRequest.getBody());
        post.setAuthor(byUsername.get());
        postRepository.save(post);
        return post;
    }

    public Post get(Long id) {
        return postRepository.findById(id).orElseThrow(EntityNotFoundException::new);
    }

    public List<Post> getAll() {
        return postRepository.findAll(Sort.by("createdAt").descending());
    }

    public List<Post> getFeed(String username) {
        return postRepository.getFollowedPosts(username);
    }
}
