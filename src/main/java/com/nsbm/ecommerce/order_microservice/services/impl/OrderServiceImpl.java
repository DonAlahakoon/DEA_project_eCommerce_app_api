package com.nsbm.ecommerce.order_microservice.services.impl;

import com.nsbm.ecommerce.order_microservice.dto.mapper.OrderMapper;
import com.nsbm.ecommerce.order_microservice.dto.obj.OrderDto;
import com.nsbm.ecommerce.order_microservice.entity.Order;
import com.nsbm.ecommerce.order_microservice.exception.ResourceNotFoundException;
import com.nsbm.ecommerce.order_microservice.repository.OrderRepository;
import com.nsbm.ecommerce.order_microservice.services.OrderService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Slf4j
@AllArgsConstructor
@Service
public class OrderServiceImpl implements OrderService {

    private final OrderRepository OrderRepository;

    @Override
    public OrderDto addNewOrder(OrderDto OrderDto) {
        log.debug("Adding new Order: {}", OrderDto);
        Order Order = OrderMapper.mapToOrder(OrderDto);
        Order savedOrder = OrderRepository.save(Order);
        log.debug("Order saved: {}", savedOrder);
        return OrderMapper.mapToOrderDto(savedOrder);
    }

    @Override
    public OrderDto getOrderById(int OrderId) {
        log.debug("Fetching Order by id: {}", OrderId);
        Order Order = OrderRepository.findById(OrderId)
                .orElseThrow(() -> new ResourceNotFoundException("Order not exist for given id: " + OrderId));
        log.debug("Order fetched: {}", Order);
        return OrderMapper.mapToOrderDto(Order);
    }

    @Override
    public List<OrderDto> getAllOrders() {
        log.debug("Fetching all the Orders");
        List<Order> Orders = OrderRepository.findAll();
        log.debug("Orders fetched: {}", Orders);
        return Orders.stream().map(OrderMapper::mapToOrderDto)
                .collect(Collectors.toList());
    }

    @Override
    public OrderDto updateOrder(int OrderId, OrderDto OrderDto) {
        log.debug("Updating Order with id: {}, data: {}", OrderId, OrderDto);
        Order Order = OrderRepository.findById(OrderId)
                .orElseThrow(() -> new ResourceNotFoundException("Order not exist for given id: " + OrderId));

        Order.setUserId(OrderDto.getUserId());
        Order.setQuantity(OrderDto.getQuantity());
        Order.setOrderStatus(OrderDto.getOrderStatus());
        Order.setCreatedAt(OrderDto.getCreatedAt());
        Order.setUpdatedAt(OrderDto.getUpdatedAt());

        Order updatedOrderObj = OrderRepository.save(Order);
        log.debug("Order updated: {}", updatedOrderObj);
        return OrderMapper.mapToOrderDto(updatedOrderObj);
    }

    @Override
    public void deleteOrder(int OrderId) {
        log.debug("Deleting Order with id: {}", OrderId);
        Order Order = OrderRepository.findById(OrderId)
                .orElseThrow(() -> new ResourceNotFoundException("Order not exist for given id: " + OrderId));
        OrderRepository.deleteById(OrderId);
        log.debug("Order deleted with id: {}", OrderId);
    }
}
