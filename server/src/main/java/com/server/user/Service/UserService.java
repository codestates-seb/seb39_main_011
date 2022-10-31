package com.server.user.Service;

import com.server.user.DTO.UserDto;
import com.server.user.Entity.Role;
import com.server.user.Entity.User;
import com.server.user.Repository.UserRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Optional;

@RequiredArgsConstructor
@Service
public class UserService {
    private final UserRepository userRepository;
    private final BCryptPasswordEncoder encoder;

    @Transactional
    public Long join(UserDto dto) {
        dto.setPassword(encoder.encode(dto.getPassword()));

        return userRepository.save(dto.toEntity()).getUserId();
    }

    public String getName(Long userId) {return userRepository.findUserByName(userId);}

    public void updateUser(User user) {
        userRepository.save(user);
    }

    public Optional<User> findUser(long userId) {
        return userRepository.findById(userId);
    }

    public String getUserName(Long userId) {return userRepository.findUserByUserName(userId);}

    public String getUserPassword(Long userId) {return userRepository.findUserByPassword(userId);}

    public Role getUserRole(Long userId) {return userRepository.findUserByRole(userId);}
}




