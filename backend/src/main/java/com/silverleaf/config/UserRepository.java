package com.silverleaf.demo.repository;package com.silverleaf.demo.repository;



import com.silverleaf.demo.model.User;import com.silverleaf.demo.model.User;

import org.springframework.data.jpa.repository.JpaRepository;import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;import org.springframework.stereotype.Repository;



public interface UserRepository extends JpaRepository<User, Long> {import java.util.Optional;

    Optional<User> findByEmail(String email);

}@Repository

public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByEmail(String email);
    boolean existsByEmail(String email);
}
