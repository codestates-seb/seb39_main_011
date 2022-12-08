package com.server.user.Mapper;

import com.server.user.DTO.UserPutDto;
import com.server.user.DTO.UserResponseDto;
import com.server.user.Entity.User;
import com.server.user.Repository.UserRepository;
import org.springframework.stereotype.Component;

@Component
public class UserMapper {
    public final UserRepository userRepository;

    public UserMapper(UserRepository userRepository) {
        this.userRepository = userRepository;
    }

    public User userPutDtoToUser(UserPutDto userPutDto) {
        return new User(
                userPutDto.getUserId(),
                userRepository.findUserByUserName(userPutDto.getUserId()),
                userPutDto.getName(),
                userPutDto.getEmail(),
                userRepository.findUserByPassword(userPutDto.getUserId()),
                userPutDto.getPhone(),
                userRepository.findUserByRole(userPutDto.getUserId())
        );
    }

    public UserResponseDto userToUserResponseDto(User user) {
        return new UserResponseDto(
                user.getUserId(),
                user.getUsername(),
                user.getName(),
                user.getEmail(),
                user.getPhone()
        );
    }
}
