package com.nsbm.ecommerce.order_microservice.repository;

import com.nsbm.ecommerce.order_microservice.entity.Order;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface OrderRepository extends JpaRepository<Order, Integer> {
}
