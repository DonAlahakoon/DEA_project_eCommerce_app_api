package com.nsbm.ecommerce.dto.mapper;

import com.nsbm.ecommerce.dto.obj.ProductDto;
import com.nsbm.ecommerce.entity.Product;

public class ProductMapper {
    public static ProductDto mapToProductDto(Product product){
        return new ProductDto(
                product.getId(),
                product.getName(),
                product.getCategoryId(),
                product.getDescription(),
                product.getQuantity(),
                product.getPhotoURL(),
                product.getPrice(),
                product.getCreatedAt(),
                product.getUpdatedAt()

        );
    }
    public static Product mapToProduct(ProductDto productDto){
        return new Product(
                productDto.getId(),
                productDto.getName(),
                productDto.getCategoryId(),
                productDto.getDescription(),
                productDto.getQuantity(),
                productDto.getPhotoURL(),
                productDto.getPrice(),
                productDto.getCreatedAt(),
                productDto.getUpdatedAt()
        );
    }
}
