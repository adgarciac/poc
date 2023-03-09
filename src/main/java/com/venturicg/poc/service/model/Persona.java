package com.venturicg.poc.service.model;

import java.io.Serializable;

public class Persona implements Serializable{
	private static final long serialVersionUID = -1090753435175674607L;
	
	private int id;
	private String nombres;
	private String apellidos;
	private String pais;
	
	
	public int getId() {
		return id;
	}
	public void setId(int id) {
		this.id = id;
	}
	public String getNombres() {
		return nombres;
	}
	public void setNombres(String nombres) {
		this.nombres = nombres;
	}
	public String getApellidos() {
		return apellidos;
	}
	public void setApellidos(String apellidos) {
		this.apellidos = apellidos;
	}
	public String getPais() {
		return pais;
	}
	public void setPais(String pais) {
		this.pais = pais;
	}
	@Override
	public String toString() {
		return "Persona [id=" + id + ", nombres=" + nombres + ", apellidos=" + apellidos + ", pais=" + pais + "]";
	}
	public Persona(int id, String nombres, String apellidos, String pais) {
		this.id = id;
		this.nombres = nombres;
		this.apellidos = apellidos;
		this.pais = pais;
	}
	public Persona() {
		
	}

	
	
}
