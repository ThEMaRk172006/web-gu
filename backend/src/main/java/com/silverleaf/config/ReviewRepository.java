package com.silverleaf.demo.repository;package com.silverleaf.demo.repository;



import com.silverleaf.demo.model.Review;import com.silverleaf.demo.model.Review;

import org.springframework.data.jpa.repository.JpaRepository;import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;import org.springframework.stereotype.Repository;



public interface ReviewRepository extends JpaRepository<Review, Long> {import java.util.List;

    List<Review> findByCareHomeId(Long careHomeId);

}@Repository

public interface ReviewRepository extends JpaRepository<Review, Long> {
    List<Review> findByCareHomeId(Long careHomeId);
    List<Review> findByUserId(Long userId);
}
