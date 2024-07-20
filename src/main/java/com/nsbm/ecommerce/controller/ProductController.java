package com.nsbm.ecommerce.controller;

import com.nsbm.ecommerce.dto.obj.ProductDto;
import com.nsbm.ecommerce.dto.util.ResponseObject;
import com.nsbm.ecommerce.services.ProductService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@AllArgsConstructor
@RestController
@RequestMapping("api/v1/products")
public class ProductController extends AbstractController {

    private ProductService productService;

    @PostMapping
    public ResponseEntity<ResponseObject> addNewProduct(@RequestBody ProductDto productDto){
        log.info("Recieved request to add new product: {}",productDto);
        ProductDto savedProductDto = productService.addNewProduct(productDto);
        log.info("Successfully added new product: {}",savedProductDto);
        return sendCreatedResponse(savedProductDto);
    }

    @GetMapping("{id}")
    public ResponseEntity<ResponseObject> getProductById(@PathVariable("id") int productId){
        log.info("Recieved request to fetch product with id: {}",productId);
        ProductDto productDto = productService.getProductById(productId);
        log.info("Successfully fetched product: {}",productDto);
        return sendSuccessResponse(productDto);
    }

    @GetMapping
    public ResponseEntity<ResponseObject> getAllProducts(){
        log.info("Received request to fetch all products");
        List<ProductDto> products = productService.getAllProducts();
        log.info("Successfully fetched all products");
        return sendSuccessResponse(products);
    }

    @PutMapping("{id}")
    public ResponseEntity<ResponseObject> updateProduct(@PathVariable("id") int productId,@RequestBody ProductDto productDto){
        log.info("Received request to update product with id: {}, data: {}", productId, productDto);
        ProductDto productDtoObj = productService.updateProduct(productId,productDto);
        log.info("Successfully updated product: {}", productDto);
        return sendSuccessResponse(productDtoObj);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<ResponseObject> deleteProduct(@PathVariable("id") int productId){
        log.info("Received request to delete product with id: {}", productId);
        productService.deleteProduct(productId);
        log.info("Successfully deleted product with id: {}", productId);
        return sendNoContentResponse();
    }



}
