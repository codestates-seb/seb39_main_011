package com.server.camp.Controller;

import com.server.camp.DTO.CampPostDto;
import com.server.camp.Entity.Camp;
import com.server.camp.Mapper.CampMapper;
import com.server.camp.Service.CampService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

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
}
