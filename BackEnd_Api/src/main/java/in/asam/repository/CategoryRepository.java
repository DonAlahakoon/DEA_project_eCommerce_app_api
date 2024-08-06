package in.asam.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import in.asam.entity.Category;

public interface CategoryRepository extends JpaRepository<Category, Long>{

}
