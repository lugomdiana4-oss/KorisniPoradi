import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HoverHighlightDirective } from '../shared/directives/hover-highlight.directive';
import { Car } from '../shared/models/car.model';

@Component({
  selector: 'app-item-card',
  standalone: true,
  imports: [CommonModule, RouterModule, HoverHighlightDirective],
  templateUrl: './item-card.html',
  styleUrls: ['./item-card.css']
})
export class ItemCard {
  @Input() car!: Car;
}
