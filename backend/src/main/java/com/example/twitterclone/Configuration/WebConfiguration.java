package com.example.twitterclone.Configuration;

import com.example.twitterclone.DTOs.PostDTO;
import com.example.twitterclone.DTOs.PosterDTOWithPosts;
import com.example.twitterclone.Entities.Post;
import com.example.twitterclone.Entities.Poster;

import org.modelmapper.Conditions;
import org.modelmapper.ModelMapper;
import org.modelmapper.TypeMap;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import io.swagger.v3.oas.models.Components;
import io.swagger.v3.oas.models.OpenAPI;
import io.swagger.v3.oas.models.security.SecurityScheme;

@Configuration
public class WebConfiguration {
    @Bean
    public BCryptPasswordEncoder bCryptPasswordEncoder() {
        return new BCryptPasswordEncoder();
    }

    @Bean
    public ModelMapper modelMapper() {
        ModelMapper modelMapper = new ModelMapper();
        // Converts Post.Author object to String
        TypeMap<Post, PostDTO> postMapper = modelMapper.createTypeMap(Post.class, PostDTO.class);
        postMapper.addMappings(
            mapper -> mapper.map(src -> src.getAuthor().getUsername(), PostDTO::setAuthor)
        );

        // Replaces null list of posts with []
        TypeMap<Poster, PosterDTOWithPosts> posterMapper = modelMapper.createTypeMap(Poster.class, PosterDTOWithPosts.class);
        posterMapper.addMappings(
            mapper -> mapper.when(Conditions.isNull()).skip(Poster::getPosts, PosterDTOWithPosts::setPosts)
        );
        return modelMapper;
    }

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                    .components(new Components()
                    .addSecuritySchemes(SecurityConstants.SECURITY_REQUIREMENT,
                    new SecurityScheme().type(SecurityScheme.Type.HTTP).scheme("bearer").bearerFormat("JWT")));
    }
}
