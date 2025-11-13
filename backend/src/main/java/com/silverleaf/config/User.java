package com.silverleaf.demo.model;package com.silverleaf.demo.model;



import jakarta.persistence.*;import jakarta.persistence.*;

import lombok.Data;import lombok.AllArgsConstructor;

import java.util.List;import lombok.Data;

import lombok.NoArgsConstructor;

@Entity

@Table(name = "users")import java.time.LocalDateTime;

@Data

public class User {@Entity

    @Id@Table(name = "users")

    @GeneratedValue(strategy = GenerationType.IDENTITY)@Data

    private Long id;@NoArgsConstructor

@AllArgsConstructor

    @Column(unique = true, nullable = false)public class User {

    private String email;    @Id

    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @Column(nullable = false)    private Long id;

    private String password;

    @Column(nullable = false, unique = true)

    @Column(nullable = false)    private String email;

    private String fullName;

    @Column(nullable = false)

    private String role = "USER";    private String password;



    @OneToMany(mappedBy = "owner", cascade = CascadeType.ALL)    @Column(nullable = false)

    private List<CareHome> careHomes;    private String fullName;

}

    @Column(nullable = false)
    private String phoneNumber;

    @Column
    private String profileImage;

    @Column(nullable = false)
    @Enumerated(EnumType.STRING)
    private UserRole role; // USER, CARE_HOME_OWNER, ADMIN

    @Column(nullable = false)
    private Boolean isActive = true;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false)
    private LocalDateTime updatedAt = LocalDateTime.now();
}

enum UserRole {
    USER, CARE_HOME_OWNER, ADMIN
}
