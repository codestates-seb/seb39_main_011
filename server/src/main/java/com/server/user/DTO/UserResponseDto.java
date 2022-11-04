package com.server.user.DTO;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
@AllArgsConstructor
public class UserResponseDto {
    private Long userId;
    private String username;
    private String name;
    private String email;
    private String phone;


}
