package com.server.user.DTO;

import com.server.user.Entity.Role;
import com.server.user.Entity.User;
import lombok.Getter;

import java.io.Serializable;

@Getter
public class UserSessionDto implements Serializable {
    private String username;
    private String password;
    private String name;
    private String email;
    private String phone;
    private Role role;

    public UserSessionDto(User user){
        this.username = user.getUsername();
        this.password = user.getPassword();
        this.name = user.getName();
        this.email = user.getEmail();
        this.phone = user.getPhone();
        this.role = user.getRole();
    }
}
