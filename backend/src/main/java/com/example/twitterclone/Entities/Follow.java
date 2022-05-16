package com.example.twitterclone.Entities;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.IdClass;
import javax.persistence.Table;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity(name = "follow")
@Table(name = "follow")
@Getter
@Setter
@NoArgsConstructor
@IdClass(FollowKey.class)
public class Follow {
    @Id
    private Long followee_id;
    @Id
    private Long follower_id;
}

class FollowKey implements Serializable {
    private Long followee_id;
    private Long follower_id;
}
