package com.venturicg.poc.service.impl;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.venturicg.poc.repository.PersonaDAO;
import com.venturicg.poc.service.PersonaService;
import com.venturicg.poc.service.model.Persona;

@Service
public class PersonaServiceImpl implements PersonaService {

	@Autowired
	private PersonaDAO personaDAO;

	@Override
	public List<Persona> findAll() {
		return  personaDAO.findAll();
	}
	
	@Override
	public int insert(Persona persona) {
		return personaDAO.insert(persona);
	}

	@Override
	public Persona findById(Integer id) {
		return personaDAO.findById(id);
	}
	@Override
	public int deleteById(Integer id) {
		return personaDAO.deleteById(id);
	}

	@Override
	public int update(Persona persona) {
		return personaDAO.update(persona);
	}
}
