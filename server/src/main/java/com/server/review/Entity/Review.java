package com.server.review.Entity;

import com.server.comment.Entity.Comment;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.List;

@Getter
@Entity
@NoArgsConstructor
@Setter
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long rev_id;
    private Long user_id;

    @Column(nullable = false)
    private String writer;  //유저정보에서 들고옴

    @Column(nullable = false)
    private String review;

    @Column(nullable = false)
    private LocalDateTime date;

    @Column(nullable = false)
    private int visit;  //예약정보에서 들고옴

    @Column(nullable = false)
    private int star;

    @Column
    private String file_path;

    @OneToMany(mappedBy = "review")
    private List<Comment> comments = new ArrayList<>();

    public Review(Long rev_id, String writer, String review, LocalDateTime date, int visit, int star, String file_path) {
        this.rev_id = rev_id;
        this.writer = writer;
        this.review = review;
        this.date = date;
        this.visit = visit;
        this.star = star;
        this.file_path = file_path;
    }
}