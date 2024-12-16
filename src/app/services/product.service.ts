import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private products: Product[] = []; // Liste de produits en mémoire

  constructor() {}

  // Récupérer les produits disponibles
  getProducts(): Product[] {
    return this.products.filter((product) => product.available);
  }

  // Ajouter un nouveau produit
  addProduct(product: Product): void {
    this.products.push({ ...product, available: true }); // Ajouter avec `available` par défaut à true
  }

  // Ajouter un like pour un produit
  likeProduct(productId: number, userId: number): void {
    const product = this.products.find((p) => p.id === productId);
    if (product && !product.likes.includes(userId)) {
      product.likes.push(userId);
    }
  }

  // Obtenir le nombre de likes pour un produit
  getLikesCount(productId: number): number {
    const product = this.products.find((p) => p.id === productId);
    return product ? product.likes.length : 0;
  }
}
