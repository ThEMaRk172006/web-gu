package com.silverleaf.demo.repository;package com.silverleaf.demo.repository;



import com.silverleaf.demo.model.CareHome;import com.silverleaf.demo.model.CareHome;

import org.springframework.data.jpa.repository.JpaRepository;import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;import org.springframework.data.jpa.repository.Query;

import org.springframework.stereotype.Repository;

public interface CareHomeRepository extends JpaRepository<CareHome, Long> {

    List<CareHome> findByProvince(String province);import java.util.List;

    List<CareHome> findByRatingGreaterThanEqual(Double rating);

}@Repository

public interface CareHomeRepository extends JpaRepository<CareHome, Long> {
    List<CareHome> findByIsActiveAndIsVerified(Boolean isActive, Boolean isVerified);
    List<CareHome> findByOwnerId(Long ownerId);
    List<CareHome> findByProvinceAndIsActiveAndIsVerified(String province, Boolean isActive, Boolean isVerified);
    
    @Query("SELECT ch FROM CareHome ch WHERE ch.isActive = true AND ch.isVerified = true ORDER BY ch.averageRating DESC")
    List<CareHome> findTopRatedCareHomes();
}
