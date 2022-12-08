package com.server.auth;

import com.server.user.Entity.Role;
import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class HelloData {
    private Long userId;
    private Role role;
}
