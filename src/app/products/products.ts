import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [],
  templateUrl: './products.html',
  styleUrl: './products.css',
})
export class Products {
  category: string | null = null;
  sort: string | null = null;

  constructor(private route: ActivatedRoute){
    this.route.queryParamMap.subscribe(params => {
      this.category = params.get('category');
      this.sort = params.get('sort');
    });
  }
}
