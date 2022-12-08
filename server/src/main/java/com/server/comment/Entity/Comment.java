package com.server.comment.Entity;

import com.server.review.Entity.Review;
import lombok.*;

import javax.persistence.*;
import java.time.LocalDate;
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

    public Comment(Long commentId, String message, LocalDate date) {
        this.commentId = commentId;
        this.message = message;
        this.date = date;
    }

    @Column
    private LocalDate date;

    @ManyToOne
    @JoinColumn(name = "REV_ID")
    private Review review;
    }

