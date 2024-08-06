package in.asam.services;

import java.util.List;

import in.asam.entity.Category;

public interface CategoryService {
	    List<Category> getAllCategories();
	    Category getCategoryById(Long id);
	    Category createCategory(Category category);
	    Category updateCategory(Long id, Category category);
	    void deleteCategory(Long id);

}
