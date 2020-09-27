package com.hoaxify.ws.user;

import lombok.Data;

@Data
public class User {

	
	private String username;
	private String displayname;
	private String password;
	private String passwordRepeat;
	
	
	@Override
	public String toString() {
		return "User [username=" + username + ", displayname=" + displayname + ", password=" + password
				+ ", passwordRepeat=" + passwordRepeat + "]";
	}
	
	
	
}
