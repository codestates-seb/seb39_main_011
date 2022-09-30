package com.server.camp.controller;

import com.server.camp.DTO.CampPostDto;
import com.server.camp.DTO.CampPutDto;
import com.server.camp.DTO.CampResponseDto;
import com.server.camp.entity.Camp;
import com.server.camp.Mapper.CampMapper;
import com.server.camp.service.CampService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping
public class CampController {

    private final CampService campService;
    private final CampMapper mapper;

    //
    public CampController(CampService campService, CampMapper mapper) {
        this.campService = campService;
        this.mapper = mapper;
    }

    //게시물 등록
    @PostMapping("/post")
    public ResponseEntity postCamp(@RequestBody CampPostDto campPostDto) {
        Camp camp = mapper.campPostDtoToCamp(campPostDto);
        campService.createCamp(camp);
        return new ResponseEntity(camp,HttpStatus.CREATED);
    }

    //게시물 수정
    @PutMapping("/admin/post/{camp-id}")
    public ResponseEntity putCamp(@PathVariable("camp-id") long camp_id,
                                  @RequestBody CampPutDto campPutDto) {
        campPutDto.setCamp_id(camp_id);
        Camp camp = mapper.campPutDtoToCamp(campPutDto);
        campService.updateCamp(camp);
        return new ResponseEntity(HttpStatus.OK);
    }

    //게시글 삭제

    @DeleteMapping("/admin/post/{camp-id}")
    public ResponseEntity deleteCamp(@PathVariable("camp-id") long camp_id) {
        campService.deleteCamp(camp_id);
        return new ResponseEntity(HttpStatus.NO_CONTENT);
    }

    //게시글 조회
    @GetMapping("/admin/post/{camp-id}")
    public ResponseEntity getCamp(@PathVariable("camp-id")long camp_id) {
        Optional<Camp> camp = campService.findCamp(camp_id);
        return new ResponseEntity(camp, HttpStatus.OK);
    }

    //메인페이지 게시글조회
    @GetMapping("/main")
    public ResponseEntity getCamps() {
        List<Camp> camps = campService.findCamps();

        List<CampResponseDto> response =
                camps.stream()
                        .map(camp -> mapper.campToCampResponseDto(camp))
                        .collect(Collectors.toList());
        return new ResponseEntity(response, HttpStatus.OK);
    }
}
