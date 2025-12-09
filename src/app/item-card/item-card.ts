import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Advice } from '../shared/models/advice.model';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './item-card.html',
  styleUrls: ['./item-card.css']
})
export class ItemCardComponent {
  @Input() item!: Advice;

  @Output() select = new EventEmitter<Advice>();

  onSelect() {
    this.select.emit(this.item);
  }
}
