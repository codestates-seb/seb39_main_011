package com.server.detail;

import com.server.camp.entity.Camp;
import com.server.review.Entity.Review;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.time.LocalDate;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@NoArgsConstructor(staticName = "init")
@AllArgsConstructor(staticName = "of")
@Getter
@Setter
public class DetailDto {
    private List<Review> reviews;
    private Optional<Camp> dto;
    public Map<String, Integer> map;
}
