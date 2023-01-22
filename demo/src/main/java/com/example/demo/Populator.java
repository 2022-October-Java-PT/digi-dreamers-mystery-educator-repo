package com.example.demo;

import com.example.demo.Module.FunFact;
import com.example.demo.Repository.FunFactRepo;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;

@Component
public class Populator implements CommandLineRunner {

    @Resource
    FunFactRepo funFactRepo;

    @Override
    public void run(String... args) throws Exception {

        FunFact funFact1 = new FunFact("Hello","Hello");
        funFactRepo.save(funFact1);

    }
}
