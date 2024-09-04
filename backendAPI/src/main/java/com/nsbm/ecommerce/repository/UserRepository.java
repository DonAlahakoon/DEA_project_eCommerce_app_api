package com.nsbm.ecommerce.repository;

import com.nsbm.ecommerce.entity.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
@Repository

public interface UserRepository extends JpaRepository<User,Integer>{
}
