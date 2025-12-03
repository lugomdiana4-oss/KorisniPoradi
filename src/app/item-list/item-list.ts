import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
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
export class ItemsList {
  search = '';
  cars$!: Observable<Car[]>;

  constructor(private dataService: DataService) {
    this.cars$ = this.dataService.cars$;
  }

  onSearchChange(): void {
    this.dataService.filterItems(this.search);
  }
}
