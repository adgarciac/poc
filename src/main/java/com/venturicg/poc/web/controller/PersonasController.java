package com.venturicg.poc.web.controller;

import java.util.HashMap;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;

import com.venturicg.poc.service.PersonaService;
import com.venturicg.poc.service.model.Persona;

@Controller
public class PersonasController {
	
	@Autowired
    private PersonaService personaService;
	
    @RequestMapping("/personas/listar")
    public String listar() {
        return "personas";
    }
    
    @RequestMapping("/personas/form")
    public String formular() {
        return "form";
    }
    
    @PostMapping(value = "/personas/guardar")
    public String guardar(@RequestParam("id") int id,
    		              @RequestParam("nombres") String nombres,
    		              @RequestParam("apellidos") String apellidos,
    		              @RequestParam("pais") String pais) {
    	System.out.println("CONTROLER_ AQUI GUARDAR");
        Map<String, Boolean> response = new HashMap<>();

        Persona persona = new Persona();
        persona.setId(id);
        persona.setNombres(nombres);
        persona.setApellidos(apellidos);
        persona.setPais(pais);
        
        Boolean bool = personaService.insert(persona) > 0 ?
                response.put("created", Boolean.TRUE) :
                response.put("created", Boolean.FALSE);

        return "personas";
    }
    
	@DeleteMapping(value="/personas/eliminar/{id}")
	public  String eliminar(@PathVariable(value="id") int id) {
		Persona persona = personaService.findById(id);

        Map<String, Boolean> response = new HashMap<>();

        Boolean bool = personaService.deleteById(persona.getId()) > 0 ?
                response.put("deleted", Boolean.TRUE) :
                response.put("deleted", Boolean.FALSE);
        return "personas";
	
	}
    
    @RequestMapping("/personas/actualizar/{id}")
    public String actualizar(@PathVariable(value="id") int id) {
    	Persona persona = personaService.findById(id);
        return "formEdit";
    }
	
	@PutMapping(value = "/personas/editar/{id}")
	public String editar(@PathVariable(value="id") int id) {
		Persona persona = personaService.findById(id);
        Map<String, Boolean> response = new HashMap<>();

        Boolean bool = personaService.deleteById(persona.getId()) > 0 ?
                response.put("updated", Boolean.TRUE) :
                response.put("updated", Boolean.FALSE);
        return "personas";
		
	}
}
