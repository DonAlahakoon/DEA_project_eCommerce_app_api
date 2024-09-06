package com.nsbm.ecommerce.controller;

import com.nsbm.ecommerce.entity.Cart;
import com.nsbm.ecommerce.services.impl.CartServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/cart")
public class CartController {
    @Autowired
    private CartServiceImpl cartService;

    @PostMapping("/add")
    public Cart addProductToCart(@RequestParam int userId, @RequestParam int productId, @RequestParam int quantity) {
        return cartService.addProductToCart(userId, productId, quantity);
    }

    @GetMapping("/get")
    public Cart getCart(@RequestParam int userId) {
        return cartService.getCartByUserId(userId);
    }

    @PutMapping("/update")
    public Cart updateProductQuantity(@RequestParam int userId, @RequestParam int productId, @RequestParam int quantity) {
        return cartService.updateProductQuantity(userId, productId, quantity);
    }

    @DeleteMapping("/remove")
    public Cart removeProductFromCart(@RequestParam int userId, @RequestParam int productId) {
        return cartService.removeProductFromCart(userId, productId);
    }

}
