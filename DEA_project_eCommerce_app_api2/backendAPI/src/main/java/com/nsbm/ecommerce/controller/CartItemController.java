package com.nsbm.ecommerce.controller;

import com.nsbm.ecommerce.dto.obj.CartItemDto;
import com.nsbm.ecommerce.dto.util.ResponseObject;
import com.nsbm.ecommerce.exception.GenericException;
import com.nsbm.ecommerce.services.CartItemService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@AllArgsConstructor
@RestController
@RequestMapping("api/v1/cart-items")
public class CartItemController extends AbstractController {

    private final CartItemService cartItemService;

    /**
     * Endpoint to add a new cart item.
     *
     * @param cartItemDto - The DTO object containing cart item details.
     * @return ResponseEntity with the created cart item.
     */
    @PostMapping
    public ResponseEntity<ResponseObject> addNewCartItem(@RequestBody CartItemDto cartItemDto) {
        log.info("Received request to add new cart item: {}", cartItemDto);
        try {
            CartItemDto savedCartItemDto = cartItemService.addNewCartItem(cartItemDto);
            log.info("Successfully added new cart item: {}", savedCartItemDto);
            return sendCreatedResponse(savedCartItemDto);
        } catch (Exception e) {
            log.error("Failed to add new cart item: {}", cartItemDto, e);
            throw new GenericException("Failed to add new cart item.");
        }
    }

    /**
     * Endpoint to fetch a cart item by its ID.
     *
     * @param cartItemId - The ID of the cart item.
     * @return ResponseEntity with the found cart item.
     */
    @GetMapping("{id}")
    public ResponseEntity<ResponseObject> getCartItemById(@PathVariable("id") int cartItemId) {
        log.info("Received request to fetch cart item with id: {}", cartItemId);
        try {
            CartItemDto cartItemDto = cartItemService.getCartItemById(cartItemId);
            log.info("Successfully fetched cart item: {}", cartItemDto);
            return sendSuccessResponse(cartItemDto);
        } catch (Exception e) {
            log.error("Failed to fetch cart item with id: {}", cartItemId, e);
            throw new GenericException("Failed to fetch cart item.");
        }
    }

    /**
     * Endpoint to fetch all cart items.
     *
     * @return ResponseEntity with a list of all cart items.
     */
    @GetMapping
    public ResponseEntity<ResponseObject> getAllCartItems() {
        log.info("Received request to fetch all cart items");
        try {
            List<CartItemDto> cartItems = cartItemService.getAllCartItems();
            log.info("Successfully fetched all cart items");
            return sendSuccessResponse(cartItems);
        } catch (Exception e) {
            log.error("Failed to fetch all cart items", e);
            throw new GenericException("Failed to fetch cart items.");
        }
    }

    /**
     * Endpoint to update an existing cart item.
     *
     * @param cartItemId - The ID of the cart item to update.
     * @param cartItemDto - The DTO object containing updated cart item details.
     * @return ResponseEntity with the updated cart item.
     */
    @PutMapping("{id}")
    public ResponseEntity<ResponseObject> updateCartItem(@PathVariable("id") int cartItemId, @RequestBody CartItemDto cartItemDto) {
        log.info("Received request to update cart item with id: {}, data: {}", cartItemId, cartItemDto);
        try {
            CartItemDto updatedCartItemDto = cartItemService.updateCartItem(cartItemId, cartItemDto);
            log.info("Successfully updated cart item: {}", updatedCartItemDto);
            return sendSuccessResponse(updatedCartItemDto);
        } catch (Exception e) {
            log.error("Failed to update cart item with id: {}", cartItemId, e);
            throw new GenericException("Failed to update cart item.");
        }
    }

    /**
     * Endpoint to delete a cart item by its ID.
     *
     * @param cartItemId - The ID of the cart item to delete.
     * @return ResponseEntity with no content.
     */
    @DeleteMapping("{id}")
    public ResponseEntity<ResponseObject> deleteCartItem(@PathVariable("id") int cartItemId) {
        log.info("Received request to delete cart item with id: {}", cartItemId);
        try {
            cartItemService.deleteCartItem(cartItemId);
            log.info("Successfully deleted cart item with id: {}", cartItemId);
            return sendNoContentResponse();
        } catch (Exception e) {
            log.error("Failed to delete cart item with id: {}", cartItemId, e);
            throw new GenericException("Failed to delete cart item.");
        }
    }
}
