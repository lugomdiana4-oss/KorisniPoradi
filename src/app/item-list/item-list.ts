import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subscription } from 'rxjs';
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
export class ItemsList implements OnInit, OnDestroy {

  search: string = '';
  cars: Car[] = [];
  private sub!: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.sub = this.dataService.cars$.subscribe(cars => {
      this.cars = cars;
    });
    this.dataService.filterItems('');
  }

  onSearchChange(): void {
    this.dataService.filterItems(this.search);
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }
}
