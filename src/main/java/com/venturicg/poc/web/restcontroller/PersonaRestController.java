package com.venturicg.poc.web.restcontroller;

import com.venturicg.poc.service.PersonaService;
import com.venturicg.poc.service.model.Persona;
import com.venturicg.poc.web.dto.PersonaDTO;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/rest/personas")
public class PersonaRestController {
	
    @Autowired
    private PersonaService personaService;

    
	@GetMapping(value = "")
	public  ResponseEntity<List<PersonaDTO>> obtenerPersonas() {
		return new ResponseEntity<>(personaService.findAll().stream()
                .map(persona -> new PersonaDTO(persona.getId(),persona.getNombres(), persona.getApellidos(), persona.getPais()))
                .collect(Collectors.toList()), HttpStatus.OK);
	}


}
