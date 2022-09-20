package com.server.camp.Controller;

import com.server.camp.DTO.CampPostDto;
import com.server.camp.DTO.CampPutDto;
import com.server.camp.Entity.Camp;
import com.server.camp.Mapper.CampMapper;
import com.server.camp.Service.CampService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/admin/post")
public class CampController {

    private final CampService campService;
    private final CampMapper mapper;
//
    public CampController(CampService campService,CampMapper mapper) {
        this.campService = campService;
        this.mapper = mapper;
}

    //게시물 등록
    @PostMapping
    public ResponseEntity postCamp(@RequestBody CampPostDto campPostDto) {
        Camp camp = mapper.campPostDtoToCamp(campPostDto);
        campService.createCamp(camp);
        return new ResponseEntity(HttpStatus.CREATED);
    }

    //게시물 수정
    @PutMapping("/{camp-id}")
    public ResponseEntity putCamp(@PathVariable("camp-id")long camp_id,
                                  @RequestBody CampPutDto campPutDto) {
        campPutDto.setCamp_id(camp_id);
        Camp camp = mapper.campPutDtoToCamp(campPutDto);
        campService.updateCamp(camp);
        return new ResponseEntity(HttpStatus.OK);
    }
}