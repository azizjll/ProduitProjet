import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css'],
})
export class AddProductComponent {
  productForm: FormGroup;

  constructor(private fb: FormBuilder, private productService: ProductService) {
    // Initialisation du formulaire
    this.productForm = this.fb.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      price: [0, [Validators.required, Validators.min(1)]],
    });
  }

  // Méthode appelée lors de la soumission
  onSubmit(): void {
    if (this.productForm.valid) {
      const newProduct: Product = {
        id: Date.now(), // Utilisez une méthode pour générer un ID unique
        name: this.productForm.value.name,
        description: this.productForm.value.description,
        price: this.productForm.value.price,
        available: true,
        likes: [],
      };

      this.productService.addProduct(newProduct); // Ajoute le produit via le service
      alert('Produit ajouté avec succès !');
      this.productForm.reset(); // Réinitialise le formulaire
    }
  }
}
