package com.nsbm.ecommerce.entity;

import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Data;

@Entity
@Table(name = "CategoryTable")
@Data
public class Category {
	
	    @Id
	    @GeneratedValue(strategy = GenerationType.IDENTITY)
	    private Long id;

	    @Column(name = "Name")
	    private String name;

	    @Column(name = "Description")
	    private String description;

	    @Column(name = "PhotoURL")
	    private String photoURL;

}
