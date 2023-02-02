package com.example.demo;


import com.example.demo.Repository.AuthorsRepo;


import com.example.demo.Repository.KidBooksRepo;
import com.example.demo.models.Authors;
import com.example.demo.models.KidBooks;
import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;

import javax.annotation.Resource;
import java.util.List;

@Component
public class Populator implements CommandLineRunner {



    @Resource
    KidBooksRepo kidBooksRepo;

    @Resource
    AuthorsRepo authorsRepo;

    @Override
    public void run(String... args) throws Exception {

//        AddKidsBook space1 = new AddKidsBook("this book has wonderful images");
//        AddKidsBook art1 = new AddKidsBook("for beginner artist");
//        addKidsBookRepo.save(space1);
//        addKidsBookRepo.save(art1);

        Authors will = new Authors("Will", "Gater");
        Authors alli = new Authors("Alli", "Koch");
        authorsRepo.save(will);
        authorsRepo.save(alli);

        KidBooks spaceBook = new KidBooks("From planets and asteroids to black holes and galaxies, every page of this enthralling space book reveals the secrets behind more than 100 celestial objects, and will inspire  youngsters as they journey through the vastness of the Universe.","The Mysteries of the Universe: Discover the best-kept secrets of space (DK Children's Anthologies)", will);
        kidBooksRepo.save(spaceBook);

        KidBooks artBook = new KidBooks("Learn how to draw favorite animals from the farm, forest, jungle, and sea, including everything from a llama to a dolphin to a kangaroo.", "All the Animals: How to Draw Books for Kids", alli);
        kidBooksRepo.save(artBook);

    }
}
