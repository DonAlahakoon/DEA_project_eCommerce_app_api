package com.nsbm.ecommerce.controller;

import com.nsbm.ecommerce.dto.obj.UserDto;
import com.nsbm.ecommerce.dto.util.ResponseObject;
import com.nsbm.ecommerce.services.UserService;
import lombok.AllArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@Slf4j
@AllArgsConstructor
@RestController
@RequestMapping("api/v1/users")

public class UserController extends AbstractController {

    private UserService userService;

    @PostMapping
    public ResponseEntity<ResponseObject> addNewUser(@RequestBody UserDto userDto){
        log.info("Received request to add new user: {}",userDto);
        UserDto savedUserDto = userService.addNewUser(userDto);
        log.info("Successfully added new product: {}",savedUserDto);
        return sendCreatedResponse(savedUserDto);
    }

    @GetMapping("{id}")
    public ResponseEntity<ResponseObject> getUserById(@PathVariable("id") int userId){
        log.info("Received request to fetch user with id: {}",userId);
        UserDto userDto = userService.getUserById(userId);
        log.info("Successfully fetched user: {}",userDto);
        return sendSuccessResponse(userDto);
    }

    @GetMapping
    public ResponseEntity<ResponseObject> getAllUsers(){
        log.info("Received request to fetch all users");
        List<UserDto> users = userService.getAllUsers();
        log.info("Successfully fetched all user");
        return sendSuccessResponse(users);
    }

    @PutMapping("{id}")
    public ResponseEntity<ResponseObject> updateProduct(@PathVariable("id") int userId,@RequestBody UserDto userDto){
        log.info("Received request to update user with id: {}, data: {}", userId, userDto);
        UserDto userDtoObj = userService.updateUser(userId,userDto);
        log.info("Successfully updated user: {}", userDto);
        return sendSuccessResponse(userDtoObj);
    }

    @DeleteMapping("{id}")
    public ResponseEntity<ResponseObject> deleteUser(@PathVariable("id") int userId){
        log.info("Received request to delete user with id: {}", userId);
        userService.deleteUser(userId);
        log.info("Successfully deleted user with id: {}", userId);
        return sendNoContentResponse();
    }



}
