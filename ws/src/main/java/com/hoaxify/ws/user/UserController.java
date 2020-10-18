package com.hoaxify.ws.user;

import org.slf4j.LoggerFactory;

import java.sql.SQLIntegrityConstraintViolationException;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.swing.text.View;
import javax.validation.Valid;

import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.validation.FieldError;
import org.springframework.web.bind.MethodArgumentNotValidException;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.fasterxml.jackson.annotation.JsonView;
import com.hoaxify.ws.error.ApiError;
import com.hoaxify.ws.shared.GenericResponse;
import com.hoaxify.ws.shared.IViews;

@RestController
public class UserController {
	
	@Autowired
	UserService userService;
	
	//private static final Logger Log = LoggerFactory.getLogger(UserController.class);

	@PostMapping("/api/1.0/users/")
	public GenericResponse createUser(@Valid @RequestBody User user) {
		
		userService.save(user);
		return (new GenericResponse("user created"));
	
	}	
	
	@GetMapping("/api/1.0/users/")
	//@JsonView(IViews.Base.class)
	Page<User> getUsers(){
		return userService.getUsers();
		
	}
	

}
	

	
