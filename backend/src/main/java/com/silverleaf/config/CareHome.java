package com.silverleaf.demo.model;package com.silverleaf.demo.model;



import jakarta.persistence.*;import jakarta.persistence.*;

import lombok.Data;import lombok.AllArgsConstructor;

import java.util.List;import lombok.Data;

import lombok.NoArgsConstructor;

@Entity

@Table(name = "care_homes")import java.time.LocalDateTime;

@Dataimport java.util.List;

public class CareHome {

    @Id@Entity

    @GeneratedValue(strategy = GenerationType.IDENTITY)@Table(name = "care_homes")

    private Long id;@Data

@NoArgsConstructor

    @Column(nullable = false)@AllArgsConstructor

    private String name;public class CareHome {

    @Id

    private String address;    @GeneratedValue(strategy = GenerationType.IDENTITY)

    private String province;    private Long id;

    private String phone;

    private Double rating = 0.0;    @Column(nullable = false)

    private String name;

    @ManyToOne

    @JoinColumn(name = "owner_id")    @Column(nullable = false)

    private User owner;    private String description;



    @OneToMany(mappedBy = "careHome", cascade = CascadeType.ALL)    @Column(nullable = false)

    private List<Review> reviews;    private String address;

}

    @Column(nullable = false)
    private String city;

    @Column(nullable = false)
    private String province;

    @Column(nullable = false)
    private String postalCode;

    @Column(nullable = false)
    private String phoneNumber;

    @Column
    private String email;

    @Column
    private Double latitude;

    @Column
    private Double longitude;

    @Column
    private String imageUrl;

    @Column
    private String websiteUrl;

    @Column(columnDefinition = "TEXT")
    private String amenities; // JSON format

    @Column(nullable = false)
    private Integer maxCapacity;

    @Column(nullable = false)
    private Integer currentOccupancy = 0;

    @Column
    private Double averageRating = 0.0;

    @ManyToOne
    @JoinColumn(name = "owner_id", nullable = false)
    private User owner;

    @Column(nullable = false)
    private Boolean isVerified = false;

    @Column(nullable = false)
    private Boolean isActive = true;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false)
    private LocalDateTime updatedAt = LocalDateTime.now();
}
