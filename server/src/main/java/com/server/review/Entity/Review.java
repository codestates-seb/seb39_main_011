package com.server.review.Entity;

import com.fasterxml.jackson.annotation.JsonIdentityInfo;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.server.comment.Entity.Comment;
import com.server.comment.Service.CommentService;
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
    private Long revId;
    private Long userId;
    private Long campId;
    private Long rezId;

    @Column(nullable = false)
    private String writer;  //유저정보에서 들고옴

    @Column(nullable = false)
    private String review;

    @Column(nullable = false)
    private LocalDateTime date;

    @Column(nullable = false)
    private String visit;  //예약정보에서 들고옴

    @Column(nullable = false)
    private int star;

    @Column
    private String file_path;

    public Review(Long revId, Long userId, Long campId,Long rezId,String writer, String review, LocalDateTime date, String visit, int star, String file_path) {
        this.revId = revId;
        this.userId = userId;
        this.campId = campId;
        this.rezId = rezId;
        this.writer = writer;
        this.review = review;
        this.date = date;
        this.visit = visit;
        this.star = star;
        this.file_path = file_path;
    }


    @OneToMany(mappedBy = "review")
    @JsonIgnoreProperties({"review"})
    private List<Comment> comments = new ArrayList<>();

//    public void addComment(Comment comment) {
//        this.comments.add(comment);
//
//        if(comment.getReview() != this) {
//            comment.setReview(this);
//        }
//    }
}
