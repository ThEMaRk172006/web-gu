package com.silverleaf.demo.model;package com.silverleaf.demo.model;



import jakarta.persistence.*;import jakarta.persistence.*;

import lombok.Data;import lombok.AllArgsConstructor;

import lombok.Data;

@Entityimport lombok.NoArgsConstructor;

@Table(name = "reviews")

@Dataimport java.time.LocalDateTime;

public class Review {

    @Id@Entity

    @GeneratedValue(strategy = GenerationType.IDENTITY)@Table(name = "reviews")

    private Long id;@Data

@NoArgsConstructor

    private Integer rating;@AllArgsConstructor

    private String comment;public class Review {

    private String reviewerName;    @Id

    @GeneratedValue(strategy = GenerationType.IDENTITY)

    @ManyToOne    private Long id;

    @JoinColumn(name = "care_home_id")

    private CareHome careHome;    @ManyToOne

}    @JoinColumn(name = "care_home_id", nullable = false)

    private CareHome careHome;

    @ManyToOne
    @JoinColumn(name = "user_id", nullable = false)
    private User user;

    @Column(nullable = false)
    private Integer rating; // 1-5

    @Column(columnDefinition = "TEXT")
    private String comment;

    @Column(nullable = false, updatable = false)
    private LocalDateTime createdAt = LocalDateTime.now();

    @Column(nullable = false)
    private LocalDateTime updatedAt = LocalDateTime.now();
}
