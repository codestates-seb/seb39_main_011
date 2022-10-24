package com.server.comment.Entity;

import com.server.review.Entity.Review;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@NoArgsConstructor
@Entity
@AllArgsConstructor
@Setter
public class Comment {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long commentId;

    @Column
    private String message;

    @Column
    private LocalDateTime date;

    @ManyToOne
    @JoinColumn(name = "REV_ID")
    private Review review;
//    public void setReview(Review review) {
//        this.review = review;
//
//        if(!review.getComments().contains(this)) {
//            review.getComments().addComment(this);
//        }
//    }
    }

