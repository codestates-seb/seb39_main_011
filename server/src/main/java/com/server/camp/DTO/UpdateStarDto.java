package com.server.camp.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UpdateStarDto {
    private Long campId;
    private double starAge;

    @Override
    public String toString() {
        return "UpdateStarDto [campId=" + campId + ", starAge=" + starAge +"]";
    }
}
