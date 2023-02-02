package com.example.demo.models;

import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.Collection;
import java.util.Objects;

@Entity
public class Authors {

    @Id
    @GeneratedValue
    private Long id;
    private String firstName;
    private String lastName;
    @ManyToMany(mappedBy = "authors")
    @JsonIgnore
    private Collection<KidBooks> books;


    public Long getId() {
        return id;
    }

    public String getFirstName() {
        return firstName;
    }

    public String getLastName() {
        return lastName;
    }

    public Collection<KidBooks> getBooks() {
        return books;
    }

    public Authors() {

    }

    public Authors(String firstName, String lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Authors authors = (Authors) o;
        return Objects.equals(id, authors.id) && Objects.equals(firstName, authors.firstName) && Objects.equals(lastName, authors.lastName) && Objects.equals(books, authors.books);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, firstName, lastName, books);
    }
}
