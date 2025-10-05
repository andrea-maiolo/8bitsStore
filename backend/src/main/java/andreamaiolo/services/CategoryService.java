package andreamaiolo.services;

import andreamaiolo.dtos.CategoryPayload;
import andreamaiolo.entities.Category;
import andreamaiolo.repositories.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class CategoryService {
    @Autowired
    private CategoryRepo categoryRepo;

    public Category saveCategory(CategoryPayload pauload) {
        Category newCategory = new Category();
        System.out.println(pauload);
        newCategory.setName(pauload.name());
        System.out.println(newCategory.getName());
        this.categoryRepo.save(newCategory);
        return newCategory;
    }
}
