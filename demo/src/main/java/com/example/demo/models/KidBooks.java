package com.example.demo.models;

import javax.persistence.*;
import java.util.*;



@Entity
public class KidBooks {

    @Id
    @GeneratedValue
    private Long id;

    @Lob
    private String description;

    private String title;


    @ManyToOne
    @JoinColumn(name = "authors_id")
    private Authors authors;

    public KidBooks(String title) {
    }


    public void setAuthors(Authors authors) {
        this.authors = authors;
    }
    
    public KidBooks(){
        
    }
    

    public KidBooks(String description, String title, Authors authors) {
        this.description = description;
        this.title = title;
        this.authors = authors;
    }

    public Long getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public String getTitle() {
        return title;
    }

    public Authors getAuthors() {
        return authors;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        KidBooks kidBooks = (KidBooks) o;
        return Objects.equals(id, kidBooks.id) && Objects.equals(description, kidBooks.description) && Objects.equals(title, kidBooks.title) && Objects.equals(authors, kidBooks.authors);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, description, title, authors);
    }
}
