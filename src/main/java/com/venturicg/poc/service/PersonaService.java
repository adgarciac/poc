package com.venturicg.poc.service;

import java.util.List;

import com.venturicg.poc.service.model.Persona;

public interface PersonaService {

	List<Persona> findAll();
	int insert(Persona persona);
	int deleteById(Integer id);
	Persona findById(Integer id); 
	int update(Persona persona);

}
