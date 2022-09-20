package com.server.review.Entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Setter
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long rev_id;

    @Column(nullable = false)
    private String writer;

    @Column(nullable = false)
    private String review;

    @Column(nullable = false)
    private LocalDateTime date;

    @Column(nullable = false)
    private int visit;

    @Column(nullable = false)
    private int star;

    @Column
    private String filename;

    @Column
    private String filepath;

}
