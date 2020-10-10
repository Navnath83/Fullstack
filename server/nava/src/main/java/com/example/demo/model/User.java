package com.example.demo.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.*;
import javax.persistence.Table;

@Entity
@Table(name="mytable")
public class User {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String firstname;
	private String lastname;
	private String username;
	private int age;
	private String password;
	private String confirmppassword;
	private String email;
	private String confirmemail;
	private String entermobilenumber;
	private String gender;


	
	
	
	public User() {} //default constructor
	//constructor
	public User(int id, String firstname, String lastname, String username, int age, String password,
			String confirmppassword, String email, String confirmemail, String entermobilenumber, String gender) {
		super();
		this.id = id;
		this.firstname = firstname;
		this.lastname = lastname;
		this.username = username;
		this.age = age;
		this.password = password;
		this.confirmppassword = confirmppassword;
		this.email = email;
		this.confirmemail = confirmemail;
		this.entermobilenumber = entermobilenumber;
		this.gender = gender;
	}
	//setter getter
	
	public String getFirstname() {
		return firstname;
	}

	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public void setFirstname(String firstname) {
		this.firstname = firstname;
	}
	public String getLastname() {
		return lastname;
	}
	public void setLastname(String lastname) {
		this.lastname = lastname;
	}
	public String getUsername() {
		return username;
	}
	public void setUsername(String username) {
		this.username = username;
	}
	public int getAge() {
		return age;
	}
	public void setAge(int age) {
		this.age = age;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getConfirmppassword() {
		return confirmppassword;
	}
	public void setConfirmppassword(String confirmppassword) {
		this.confirmppassword = confirmppassword;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public String getConfirmemail() {
		return confirmemail;
	}
	public void setConfirmemail(String confirmemail) {
		this.confirmemail = confirmemail;
	}
	public String getEntermobilenumber() {
		return entermobilenumber;
	}
	public void setEntermobilenumber(String entermobilenumber) {
		this.entermobilenumber = entermobilenumber;
	}
	public String getGender() {
		return gender;
	}
	public void setGender(String gender) {
		this.gender = gender;
	}
	

}
