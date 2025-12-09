import { Component, OnInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from '../item-card/item-card';
import { Advice } from '../shared/models/advice.model';
import { FormsModule } from '@angular/forms';
import { DataService } from '../shared/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCardComponent],
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css']
})
export class ItemsListComponent implements OnInit, OnDestroy {

  searchTerm: string = '';
  adviceList: Advice[] = [];

  private subscription!: Subscription;

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.subscription = this.dataService.items$.subscribe(items => {
      this.adviceList = items;
    });

    this.dataService.getItems().subscribe(items => {
      this.adviceList = items;
    });
  }

  onSearch() {
    this.dataService.filterItems(this.searchTerm);
  }

  ngOnDestroy(): void {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onItemSelected(item: Advice) {
    console.log('Обраний елемент:', item);
  }
}
