package com.server.user.Controller;

import com.server.user.DTO.UserDto;
import com.server.user.DTO.UserPutDto;
import com.server.user.DTO.UserResponseDto;
import com.server.user.Entity.User;
import com.server.user.Mapper.UserMapper;
import com.server.user.Service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@AllArgsConstructor
public class UserController {
    private final UserMapper mapper;

    private final UserService userService;

    @PostMapping("/user/join")
    public ResponseEntity joinUser(@RequestBody UserDto userDto) {
        userService.join(userDto);

        return new ResponseEntity(HttpStatus.CREATED);
    }

    @PutMapping("/user/info/{user-id}")
    public ResponseEntity putUser(@PathVariable("user-id") long userId,
                                  @RequestBody UserPutDto userPutDto) {
        userPutDto.setUserId(userId);
        User user = mapper.userPutDtoToUser(userPutDto);
        userService.updateUser(user);
        return new ResponseEntity(HttpStatus.OK);
    }

    @GetMapping("/user/info/{user-id}")
    public ResponseEntity getUser(@PathVariable("user-id") long userId) {
        Optional<User> user = userService.findUser(userId);
        List<UserResponseDto> response =
                user.stream()
                        .map(User -> mapper.userToUserResponseDto(User))
                        .collect(Collectors.toList());
        return new ResponseEntity(response, HttpStatus.OK);
    }
}
