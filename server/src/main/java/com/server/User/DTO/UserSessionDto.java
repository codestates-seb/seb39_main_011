package com.server.User.DTO;

import com.server.User.Entity.Role;
import com.server.User.Entity.User;
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
