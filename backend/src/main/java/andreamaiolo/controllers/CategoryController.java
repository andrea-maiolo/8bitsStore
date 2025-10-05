package andreamaiolo.controllers;

import andreamaiolo.dtos.CategoryDto;
import andreamaiolo.dtos.CategoryPayload;
import andreamaiolo.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/category")
public class CategoryController {
    @Autowired
    private CategoryService categoryService;

    @PostMapping("/new")
    @ResponseStatus(HttpStatus.CREATED)
    public void saveNewCategory(@RequestBody CategoryPayload paylaod) {
        categoryService.saveCategory(paylaod);
    }

    @GetMapping
    public List<CategoryDto> getAllCategories() {
        return categoryService.findAll();
    }

    @DeleteMapping("/{categoryId}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteCategory(@PathVariable UUID categoryId) {
        this.categoryService.findAndDelete(categoryId);
    }

    @PatchMapping("/{categoryId}/update")
    @ResponseStatus(HttpStatus.ACCEPTED)
    public void updateCategory(@PathVariable UUID categoryId, @RequestBody CategoryPayload payload) {
        this.categoryService.findAndUpdate(categoryId, payload);
    }
}
