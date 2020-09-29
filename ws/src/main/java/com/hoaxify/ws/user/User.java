package com.hoaxify.ws.user;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.validation.constraints.NotNull;
import javax.validation.constraints.Pattern;
import javax.validation.constraints.Size;

import com.fasterxml.jackson.annotation.JsonView;
import com.hoaxify.ws.shared.IViews;

import lombok.Data;

@Data
@Entity
public class User {

	@Id
	@GeneratedValue
	private long id;
	
	@NotNull
	@Size(min = 4, max=255)
	@UniqueUsername 
	@JsonView(IViews.Base.class)
	private String username;
	
	@NotNull
	@Size(min = 4, max=255)
	@JsonView(IViews.Base.class)
	private String displayname;
	
	@NotNull
	@Size(min = 8, max=255)
	@Pattern(regexp = "^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d).*$")
	private String password;
	
	@JsonView(IViews.Base.class)
	private String image;
	
}
