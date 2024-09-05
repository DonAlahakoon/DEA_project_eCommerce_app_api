package com.nsbm.ecommerce.dto.mapper;

import com.nsbm.ecommerce.dto.obj.UserDto;
import com.nsbm.ecommerce.entity.User;

public class UserMapper {
    public static UserDto mapToUser(User user){
        return new UserDto(
                user.getId(),
                user.getName(),
                user.getUsername(),
                user.getPassword(),
                user.getFirstName(),
                user.getLastName(),
                user.getEmail(),
                user.getCreatedAt(),
                user.getUpdatedAt()

        );
    }
    public static User mapToUser(UserDto userDto){
        return new User(
                userDto.getId(),
                userDto.getName(),
                userDto.getUsername(),
                userDto.getPassword(),
                userDto.getFirstName(),
                userDto.getLastName(),
                userDto.getEmail(),
                userDto.getCreatedAt(),
                userDto.getUpdatedAt()
        );
    }
}
