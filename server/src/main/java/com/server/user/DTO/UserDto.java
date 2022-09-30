package com.server.user.DTO;

import com.server.user.Entity.Role;
import com.server.user.Entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class UserDto {

    private String username;
    private String password;
    private String email;
    private String name;
    private String phone;
    private Role role;

    public User toEntity() {
        User user = User.builder()
                .username(username)
                .password(password)
                .email(email)
                .name(name)
                .phone(phone)
                .role(role)
                .build();
        return user;
    }
}
