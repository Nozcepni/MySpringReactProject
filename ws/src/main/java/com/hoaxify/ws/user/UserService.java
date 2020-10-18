package com.hoaxify.ws.user;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

@Service
public class UserService {
	
	
	IUserRepository userRepository;
	
	
	PasswordEncoder passwordEncoder;
	

	public UserService(IUserRepository userRepository,PasswordEncoder passwordEncoder) {
		this.passwordEncoder  = passwordEncoder;
		this.userRepository = userRepository;
	}
 

	public void save(User user) {
		String encryptedPassword = this.passwordEncoder.encode(user.getPassword());
		user.setPassword(encryptedPassword);
		userRepository.save(user);
	}


	public Page<User> getUsers() {
		
		Pageable page = PageRequest.of(0,5);
		
		
		return userRepository.findAll(page);
	}
	
	

}
