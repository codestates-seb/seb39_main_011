package com.server.camp.controller;

import com.server.camp.DTO.CampPostDto;
import com.server.camp.DTO.CampPutDto;
import com.server.camp.DTO.CampResponseDto;
import com.server.camp.entity.Camp;
import com.server.camp.Mapper.CampMapper;
import com.server.camp.service.CampService;
import com.server.detail.DetailDto;
import com.server.detail.DetailService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@RequestMapping
public class CampController {

    private final CampService campService;
    private final CampMapper mapper;
    private final DetailService detailService;

    //
    public CampController(CampService campService, CampMapper mapper, DetailService detailService) {
        this.campService = campService;
        this.mapper = mapper;
        this.detailService = detailService;
    }

    //게시물 등록
    @PostMapping("/admin/post")
    public ResponseEntity postCamp(@RequestBody CampPostDto campPostDto) {
        Camp camp = mapper.campPostDtoToCamp(campPostDto);
        campService.createCamp(camp);
        return new ResponseEntity(camp,HttpStatus.CREATED);
    }

    //게시물 수정
    @PutMapping("/admin/post/{camp-id}")
    public ResponseEntity putCamp(@PathVariable("camp-id") long campId,
                                  @RequestBody CampPutDto campPutDto) {
        campPutDto.setCampId(campId);
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
    @GetMapping("/admin/post/{user-id}")
    public ResponseEntity getCamp(@PathVariable("user-id")long userId) {
        List<Camp> camp = campService.findCamp(userId);
        return new ResponseEntity(camp, HttpStatus.OK);
    }

    //메인페이지 게시글조회
    @GetMapping("/main")
    public ResponseEntity getCamps() {
//        List<Camp> response = campService.findCamps();
        List<Camp> camps = campService.findCamps();

        List<CampResponseDto> response =
                camps.stream()
                        .map(Camp -> mapper.campToCampResponseDto(Camp))
                        .collect(Collectors.toList());
        return new ResponseEntity(response, HttpStatus.OK);
    }

    //상세페이지
    @GetMapping("/detail/{camp-id}")
    public ResponseEntity getDetail(@PathVariable("camp-id")long campId) {
        DetailDto dto = detailService.combineCampInfoWithReview(campId);
        return new ResponseEntity(dto, HttpStatus.OK);
    }
}
