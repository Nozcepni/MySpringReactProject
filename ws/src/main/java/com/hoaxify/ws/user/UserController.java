package com.hoaxify.ws.user;

import org.slf4j.LoggerFactory;
import org.slf4j.Logger;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {
	
	@Autowired
	IUserRepository userRepository;
	
	//private static final Logger Log = LoggerFactory.getLogger(UserController.class);

	@PostMapping("/api/1.0/users/")
	public void createUser(@RequestBody User user) {
		
		userRepository.save(user);
		
	}
	
	
}
