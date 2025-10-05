package andreamaiolo.services;

import andreamaiolo.dtos.ProductPayload;
import andreamaiolo.entities.Product;
import andreamaiolo.exceptions.NotFoundException;
import andreamaiolo.repositories.ProductRepo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.UUID;

@Service
public class ProductService {
    @Autowired
    private ProductRepo productRepo;

    public Product saveProduct(ProductPayload payload) {
        Product newProd = new Product();
        newProd.setName(payload.name());
        newProd.setDescription(payload.description());
        newProd.setPrice(payload.price());
        newProd.setStock(payload.stock());
        this.productRepo.save(newProd);
        return newProd;
    }

    public Product findById(UUID prodId) {
        return this.productRepo.findById(prodId).orElseThrow(() -> new NotFoundException("Product not found"));
    }

//   public Product updateProd(ProdUpdatePayload payload, UUID prodId){
//        Product found = findById(prodId);
//       found.setName(payload.name());
//       found.setDescription(payload.description());
//       found.setPrice(payload.price());
//       found.setStock(payload.stock());
//   }
}
