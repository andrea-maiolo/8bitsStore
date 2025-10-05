package andreamaiolo.controllers;

import andreamaiolo.dtos.CategoryPayload;
import andreamaiolo.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.*;

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
}
