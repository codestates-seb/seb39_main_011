package com.server.user.Entity;

import lombok.Getter;
import lombok.RequiredArgsConstructor;

@Getter
@RequiredArgsConstructor
public enum Role {
    USER("ROLE_USER","USER"),
    ADMIN("ROLE_ADMIN","ADMIN");

    private final String value;
    private final String key;
}
