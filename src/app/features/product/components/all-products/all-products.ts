import { Component } from '@angular/core';
import {ExampleService} from '../../../../shared/services/example-service';

@Component({
  selector: 'app-all-products',
  standalone: false,
  templateUrl: './all-products.html',
  styleUrl: './all-products.scss'
})
export class AllProducts {
  id: number;

  constructor(private exampleService: ExampleService) {
    this.id = exampleService.id;
  }
}
