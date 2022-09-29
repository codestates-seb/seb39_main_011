package com.server.Review.Entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.time.LocalDateTime;

@Getter
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Review {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long rev_id;

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

//    @Column
//    private String filename;
//
//    @Column
//    private String filepath;

}
