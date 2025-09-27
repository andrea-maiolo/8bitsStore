package andreamaiolo.entities;

import jakarta.persistence.*;

import java.util.UUID;

@Entity
@Table(name = "products")
public class Product {
    @ManyToOne
    private Category category_id;
    @Id
    @GeneratedValue
    private UUID id;
    private String description;
    private String name;
    private Double price;
    private int stock;

    public Product() {
    }

    public Product(Category category, int stock, Double price, String name, String description) {
        this.category_id = category;
        this.stock = stock;
        this.price = price;
        this.name = name;
        this.description = description;
    }

    public Category getCategory() {
        return category_id;
    }

    public void setCategory(Category category) {
        this.category_id = category;
    }

    public UUID getId() {
        return id;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Double getPrice() {
        return price;
    }

    public void setPrice(Double price) {
        this.price = price;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }
}
