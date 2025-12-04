import { Component, Input } from '@angular/core';
import { Advice } from '../shared/models/advice.model';

@Component({
  selector: 'app-item-card',
  standalone: true,
  templateUrl: './item-card.html',
  styleUrls: ['./item-card.css']
})
export class ItemCardComponent {
  @Input() item!: Advice;
}
