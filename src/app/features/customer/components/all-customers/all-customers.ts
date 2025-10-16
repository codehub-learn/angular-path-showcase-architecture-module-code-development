import { Component } from '@angular/core';
import {ExampleService} from '../../../../shared/services/example-service';

@Component({
  selector: 'app-all-customers',
  standalone: false,
  templateUrl: './all-customers.html',
  styleUrl: './all-customers.scss'
})
export class AllCustomers {
  id: number;

  constructor(private exampleService: ExampleService) {
    this.id = exampleService.id;
  }
}
