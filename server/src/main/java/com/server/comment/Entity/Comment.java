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
    private Long comment_id;

    @Column
    private String message;

    @Column
    private LocalDateTime date;

    @ManyToOne
    @JoinColumn(name = "REV_ID")
    private Review review;
    }

