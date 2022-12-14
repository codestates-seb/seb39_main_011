package com.server.user.Repository;

import com.server.user.Entity.Role;
import com.server.user.Entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.util.Optional;

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);

    @Query(value = "SELECT name FROM user WHERE user_id =?", nativeQuery = true)
    String findUserByName(Long userId);

    @Query(value = "SELECT username FROM user WHERE user_id=?", nativeQuery = true)
    String findUserByUserName(Long userId);

    @Query(value = "SELECT password FROM user WHERE user_id=?", nativeQuery = true)
    String findUserByPassword(Long userId);

    @Query(value = "SELECT role FROM user WHERE user_id=?", nativeQuery = true)
    Role findUserByRole(Long userId);
}
