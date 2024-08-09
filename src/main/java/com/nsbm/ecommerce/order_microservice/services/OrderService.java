package com.nsbm.ecommerce.order_microservice.services;

import java.util.List;

import com.nsbm.ecommerce.order_microservice.dto.obj.OrderDto;

public interface OrderService {

    OrderDto addNewOrder(OrderDto OrderDto);

    OrderDto getOrderById(int id);

    List<OrderDto> getAllOrders();

    OrderDto updateOrder(int productId, OrderDto product);

    void deleteOrder(int id);

}
