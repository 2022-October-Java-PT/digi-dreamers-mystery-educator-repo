package com.example.demo.RestControllers;


import com.example.demo.Repository.KidBooksRepo;

import com.example.demo.models.KidBooks;
import org.json.JSONException;
import org.json.JSONObject;
import org.springframework.web.bind.annotation.*;

import javax.annotation.Resource;
import java.util.Collection;
import java.util.Optional;

@CrossOrigin
@RestController
public class KidBooksRestController {

    @Resource
    private KidBooksRepo kidBooksRepo;

    @GetMapping("/api/kidbooks")
    public Collection<KidBooks> getKidBooks() {
        return (Collection<KidBooks>) kidBooksRepo.findAll();
    }

    @GetMapping("/api/kidbooks/{id}")
    public Optional<KidBooks> getKidBooks(@PathVariable Long id) {
        return kidBooksRepo.findById(id);
    }

    @PostMapping("/api/kidbooks/add-kidBooks")
    public Collection<KidBooks> kidBooksToAdd(@RequestBody String body, @PathVariable Long id) throws JSONException {
        JSONObject newKidsBook = new JSONObject(body);
        String title = newKidsBook.getString("name");
        Optional<KidBooks> addKidsBookOpt = kidBooksRepo.findByTitle(title);

        if (addKidsBookOpt.isEmpty()) {
            KidBooks kidBooksToAdd = new KidBooks(title);
            kidBooksRepo.save(kidBooksToAdd);
        }
        return (Collection<KidBooks>) kidBooksRepo.findAll();
    }

}
