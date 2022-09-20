package com.server.camp.Repository;

import com.server.camp.Entity.Camp;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CampRepository extends JpaRepository<Camp, Long> {
}
