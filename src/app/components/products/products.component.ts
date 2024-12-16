import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../services/product.service';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css'],
})
export class ProductsComponent implements OnInit {
  products: Product[] = []; // Liste des produits disponibles

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.products = this.productService.getProducts(); // Récupère les produits disponibles
  }

  onLike(productId: number): void {
    const userId = 1; // Exemple : l'ID utilisateur peut être statique ou dynamique
    this.productService.likeProduct(productId, userId);
    this.products = this.productService.getProducts(); // Mise à jour de la liste
  }
}
