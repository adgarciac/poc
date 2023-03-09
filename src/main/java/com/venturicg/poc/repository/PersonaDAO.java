package com.venturicg.poc.repository;

import java.util.List;

import org.apache.ibatis.annotations.Delete;
import org.apache.ibatis.annotations.Insert;
import org.apache.ibatis.annotations.Mapper;
import org.apache.ibatis.annotations.Select;
import org.apache.ibatis.annotations.Update;

import com.venturicg.poc.service.model.Persona;

@Mapper
public interface PersonaDAO {

	@Select("select * from personas")
    List<Persona> findAll();

    @Select("SELECT * FROM personas WHERE id = #{id}")
    Persona findById(Integer id);

    @Delete("DELETE FROM personas WHERE id = #{id}")
    int deleteById(Integer id);

    @Insert("INSERT INTO personas(id,nombres, apellidos, pais) " +
            " VALUES (#{id},#{nombres}, #{apellidos}, #{pais})")
    int insert(Persona persona);

    @Update("Update personas set nombres=#{nombres}, " +
            " apellidos=#{apellidos}, pais=#{pais} where id=#{id}")
    int update(Persona persona);
}
