package com.example.twitterclone.Entities;

import java.time.LocalDateTime;
import java.time.ZoneOffset;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.OrderBy;
import javax.persistence.Table;

import org.hibernate.annotations.CreationTimestamp;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "poster")
@Table(name = "poster")
@Getter
@Setter
@NoArgsConstructor
public class Poster {
    @Id
    private String username;
    private String password;
    @CreationTimestamp
    private final LocalDateTime createdAt = LocalDateTime.now(ZoneOffset.UTC);

    @ManyToMany(cascade = CascadeType.ALL)
    @JoinTable(name = "follow",
            joinColumns = @JoinColumn(name = "follower_name", referencedColumnName = "username"),
            inverseJoinColumns = @JoinColumn(name = "followee_name", referencedColumnName = "username"))
    private List<Poster> followings;

    @ManyToMany(mappedBy = "followings")
    private List<Poster> followers;

    @OneToMany(mappedBy = "author")
    @OrderBy("createdAt DESC")
    private List<Post> posts;
}
