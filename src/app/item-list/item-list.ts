import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ItemCard } from '../item-card/item-card';
import { Car } from '../shared/models/car.model';
import { DataService } from '../shared/services/data.service';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCard],
  templateUrl: './item-list.html',
  styleUrls: ['./item-list.css']
})
export class ItemsList implements OnInit {

  search: string = '';
  cars: Car[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.cars = this.dataService.getItems();
  }

  get filteredCars(): Car[] {
    return this.cars.filter(car =>
      (car.brand + ' ' + car.model)
        .toLowerCase()
        .includes(this.search.toLowerCase())
    );
  }

  onCarSelected(car: Car) {
    console.log('🚗 Обраний автомобіль:', car);
  }
}
