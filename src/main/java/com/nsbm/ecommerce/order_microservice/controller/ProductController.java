package com.nsbm.ecommerce.order_microservice.controller;

import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.nsbm.ecommerce.order_microservice.dto.obj.OrderDto;
import com.nsbm.ecommerce.order_microservice.dto.util.ResponseObject;
import com.nsbm.ecommerce.order_microservice.services.OrderService;

import java.util.List;

@Slf4j
@AllArgsConstructor
@RestController
@RequestMapping("api/v1/orders")
public class ProductController extends AbstractController {

    private OrderService orderService;

    @PostMapping
    public ResponseEntity<ResponseObject> addNewOrder(@RequestBody OrderDto orderDto) {
        log.info("Received request to add new order: {}", orderDto);
        OrderDto savedOrderDto = orderService.addNewOrder(orderDto);
        log.info("Successfully added new order: {}", savedOrderDto);
        return sendCreatedResponse(savedOrderDto);
    }

    @GetMapping("{id}")
    public ResponseEntity<ResponseObject> getOrderById(@PathVariable("id") int orderId) {
        log.info("Received request to fetch Order with id: {}", orderId);
        OrderDto orderDto = orderService.getOrderById(orderId);
        log.info("Successfully fetched order: {}", orderDto);
        return sendSuccessResponse(orderDto);
    }

    @GetMapping
    public ResponseEntity<ResponseObject> getAllProducts() {
        log.info("Received request to fetch all orders");
        List<OrderDto> orders = orderService.getAllOrders();
        log.info("Successfully fetched all orders");
        return sendSuccessResponse(orders);
    }

    @PutMapping("{id}")
    public ResponseEntity<ResponseObject> updateOrder(@PathVariable("id") int orderId,
            @RequestBody OrderDto orderDto) {
        log.info("Received request to update order with id: {}, data: {}", orderId, orderDto);
        OrderDto orderDtoObj = orderService.updateOrder(orderId, orderDto);
        log.info("Successfully updated order: {}", orderDto);
        return sendSuccessResponse(orderDtoObj);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<ResponseObject> deleteOrder(@PathVariable("id") int orderId) {
        log.info("Received request to delete order with id: {}", orderId);
        orderService.deleteOrder(orderId);
        log.info("Successfully deleted order with id: {}", orderId);
        return sendNoContentResponse();
    }

}
