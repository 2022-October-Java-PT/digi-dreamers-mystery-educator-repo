package com.example.demo.Module;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Lob;
import java.util.Objects;

@Entity
public class FunFact {

    @Id
    @GeneratedValue
    private Long id;

    @Lob
    private String funFactDescription;

    private String funFactTitle;

    public FunFact() {
    }

    public FunFact(String funFactDescription, String funFactTitle) {
        this.funFactDescription = funFactDescription;
        this.funFactTitle = funFactTitle;
    }

    public Long getId() {
        return id;
    }

    public String getFunFactDescription() {
        return funFactDescription;
    }

    public String getFunFactTitle() {
        return funFactTitle;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        FunFact funFact = (FunFact) o;
        return Objects.equals(id, funFact.id) && Objects.equals(funFactDescription, funFact.funFactDescription) && Objects.equals(funFactTitle, funFact.funFactTitle);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, funFactDescription, funFactTitle);
    }
}
