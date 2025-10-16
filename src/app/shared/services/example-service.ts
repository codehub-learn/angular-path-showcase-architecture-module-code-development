import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // singleton
})
export class ExampleService {
  private _id = Math.random();

  constructor() {
    console.error("Created example service.");
  }

  get id(): number {
    return this._id;
  }
}
