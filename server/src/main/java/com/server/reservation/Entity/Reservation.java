package com.server.reservation.Entity;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.*;

@Getter
@NoArgsConstructor
@AllArgsConstructor
@Entity
public class Reservation {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long rezId;
    private Long userId;
    private Long campId;

    @Column(nullable = false)
    private String name;

    @Column(nullable = false)
    private String date;

    @Column(nullable = false)
    private String phone;

    @Column(nullable = false)
    private String note;

    @Column(nullable = false)
    private int price;

    @Column(nullable = false)
    private int quantity;
}
