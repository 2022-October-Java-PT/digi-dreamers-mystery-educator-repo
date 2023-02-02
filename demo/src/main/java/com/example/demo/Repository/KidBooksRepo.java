package com.example.demo.Repository;

import com.example.demo.models.KidBooks;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface KidBooksRepo extends CrudRepository<KidBooks, Long> {

    Optional<KidBooks> findByTitle(String title);
}
