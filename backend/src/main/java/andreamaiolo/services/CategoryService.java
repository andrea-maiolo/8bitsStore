package andreamaiolo.services;

import andreamaiolo.dtos.CategoryDto;
import andreamaiolo.dtos.CategoryPayload;
import andreamaiolo.entities.Category;
import andreamaiolo.exceptions.NotFoundException;
import andreamaiolo.repositories.CategoryRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

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

    public Category findById(UUID catId) {
        return this.categoryRepo.findById(catId).orElseThrow(() -> new NotFoundException("category not found"));
    }

    public List<CategoryDto> findAll() {
        List<Category> categoriesFound = this.categoryRepo.findAll();
        List<CategoryDto> categoryDtoList = categoriesFound.stream()
                .map(category -> new CategoryDto(category.getName()))
                .collect(Collectors.toList());
        return categoryDtoList;
    }

    public void findAndDelete(UUID categoryId) {
        Category found = findById(categoryId);
        this.categoryRepo.delete(found);
    }

    public void findAndUpdate(UUID categoryId, CategoryPayload payload) {
        Category found = findById(categoryId);
        found.setName(payload.name());
        this.categoryRepo.save(found);

    }
}
