import { Component, OnInit, Input, Output } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/Product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.scss']
})
export class ProductDetailsComponent implements OnInit {

  // input tas emot från föräldern
  @Input() id: number;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      // params är ett objekt
      console.log(params);
      this.id = params.id;
    });

  }

}
