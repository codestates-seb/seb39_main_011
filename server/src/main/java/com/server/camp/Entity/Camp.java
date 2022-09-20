package com.server.camp.Entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Entity
@Getter
@NoArgsConstructor
@AllArgsConstructor
public class Camp {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long camp_id;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private int price;

    @Column(nullable = false)
    private String note;

    @Column(nullable = false)
    private String place;

    @Column(nullable = false)
    private String phone;

    @Column(nullable = false)
    private int capacity;

    @Column(nullable = false)
    private int star_total;
}
