package com.server.user.DTO;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class UserPutDto {
    private Long userId;
    private String name;
    private String email;
    private String phone;
}
