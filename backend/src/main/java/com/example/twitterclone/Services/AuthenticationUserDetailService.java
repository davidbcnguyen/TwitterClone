package com.example.twitterclone.Services;

import java.util.Collections;

import com.example.twitterclone.Entities.Poster;

import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.stereotype.Service;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AuthenticationUserDetailService implements UserDetailsService {
    private final PosterService posterService;

    @Override
    public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
        Poster poster = posterService.getUserByUsername(username);
        if (poster == null) {
            throw new UsernameNotFoundException(username);
        }
        return new User(poster.getUsername(), poster.getPassword(), Collections.emptyList());
    }
}
