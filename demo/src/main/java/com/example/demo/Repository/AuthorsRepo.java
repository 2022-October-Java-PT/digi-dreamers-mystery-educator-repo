package com.example.demo.Repository;

import com.example.demo.models.Authors;
import org.springframework.data.repository.CrudRepository;

public interface AuthorsRepo extends CrudRepository<Authors, Long> {
}
