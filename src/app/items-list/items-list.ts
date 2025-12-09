import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from '../item-card/item-card';
import { Advice } from '../shared/models/advice.model';
import { FormsModule } from '@angular/forms';
import { DataService } from '../shared/data.service';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, FormsModule, ItemCardComponent],
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css']
})
export class ItemsListComponent implements OnInit {

  searchTerm: string = '';
  adviceList: Advice[] = [];

  constructor(private dataService: DataService) {}

  ngOnInit(): void {
    this.adviceList = this.dataService.getItems();
  }

  get filteredList() {
    return this.adviceList.filter(a =>
      a.title.toLowerCase().includes(this.searchTerm.toLowerCase())
    );
  }

  onItemSelected(item: Advice) {
    console.log('Обраний елемент:', item);
  }
}
