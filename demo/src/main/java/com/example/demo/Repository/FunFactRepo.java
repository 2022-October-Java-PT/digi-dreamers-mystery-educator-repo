package com.example.demo.Repository;

import com.example.demo.Module.FunFact;
import org.springframework.data.repository.CrudRepository;

public interface FunFactRepo extends CrudRepository<FunFact, Long> {
}
