package com.example.demo.Controller;

import com.example.demo.Module.FunFact;
import com.example.demo.Repository.FunFactRepo;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Optional;
import java.util.concurrent.ThreadLocalRandom;

@CrossOrigin
@RestController
public class FunFactRestController {

    FunFactRepo funFactRepo;

    public FunFactRestController(FunFactRepo funFactRepo) {
        this.funFactRepo = funFactRepo;
    }

    @GetMapping(" ")
    public Optional<FunFact> generateQuote() {
        long randNum = Long.valueOf(ThreadLocalRandom.current().nextInt(1,11));
        return funFactRepo.findById(randNum);
    }
}
