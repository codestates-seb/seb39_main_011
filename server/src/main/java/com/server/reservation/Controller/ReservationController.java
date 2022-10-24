package com.server.reservation.Controller;

import com.server.reservation.DTO.RezPostDto;
import com.server.reservation.Entity.Reservation;
import com.server.reservation.Mapper.RezMapper;
import com.server.reservation.Service.RezService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping
public class ReservationController {

    private final RezService rezService;
    private final RezMapper mapper;

    public ReservationController(RezService rezService, RezMapper mapper) {
        this.rezService = rezService;
        this.mapper = mapper;
    }


    @PostMapping("/detail")
    public ResponseEntity postRez(@RequestBody @Valid RezPostDto rezPostDto) {
        Reservation reservation = mapper.rezPostDtoToRez(rezPostDto);
        rezService.createRez(reservation);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    @DeleteMapping("client/info/rez/{rez-id}")
    public ResponseEntity deleteRez(@PathVariable("rez-id")long rezId) {
        rezService.deleteRez(rezId);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    //예약전체조회
    @GetMapping("client/info/rez/{user-id}")
    public ResponseEntity getRez(@PathVariable("user-id")long userId) {
        List<Reservation> response = rezService.findRez(userId);
        return new ResponseEntity(response,HttpStatus.OK);
    }

    //기업용 예약전체조회
    @GetMapping("admin/rez/{camp-id}")
    public ResponseEntity adminRez(@PathVariable("camp-id")long campId) {
        List<Reservation> response = rezService.findAdminRez(campId);
        return new ResponseEntity(response,HttpStatus.OK);
    }
    //관리자예약취소
    @DeleteMapping("admin/rez/{rezId}")
    public ResponseEntity deleteAdmin(@PathVariable("rezId") long rezId) {
        rezService.deleteRez(rezId);
        return new ResponseEntity(HttpStatus.OK);
    }
}
