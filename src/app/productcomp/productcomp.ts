import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productcomp',
  imports: [],
  templateUrl: './productcomp.html',
  styleUrl: './productcomp.css',
})
export class Productcomp {
  productId!: string ;
  constructor(private route:ActivatedRoute) {
    // this.productId = this.route.snapshot.paramMap.get('id') || ' ';

    this.route.paramMap.subscribe((params)=>{
      this.productId = params.get('id') || ' ';
    });
      
  }
}