package com.server.user.Controller;

import com.server.user.DTO.UserDto;
import com.server.user.Service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    private final UserService userService;

    public UserController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/user/join")
    public ResponseEntity joinUser(@RequestBody UserDto userDto) {
        userService.join(userDto);

        return new ResponseEntity(HttpStatus.CREATED);
    }
}
