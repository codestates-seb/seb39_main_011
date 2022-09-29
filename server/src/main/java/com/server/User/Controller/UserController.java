package com.server.User.Controller;

import com.server.User.DTO.UserDto;
import com.server.User.Service.UserService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseBody;
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
