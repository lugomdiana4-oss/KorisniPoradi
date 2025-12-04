import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemCardComponent } from '../item-card/item-card';
import { Advice } from '../shared/models/advice.model';

@Component({
  selector: 'app-items-list',
  standalone: true,
  imports: [CommonModule, ItemCardComponent],
  templateUrl: './items-list.html',
  styleUrls: ['./items-list.css']
})
export class ItemsListComponent {
  adviceList: Advice[] = [
    {
      id: 1,
      title: 'Плануйте свій день',
      description: 'Складіть список справ на ранок — це допоможе зекономити час.',
      category: 'Організація',
      image: 'https://images.unsplash.com/photo-1506784983877-45594efa4cbe'
    },
    {
      id: 2,
      title: 'Пийте більше води',
      description: 'Регулярне споживання води покращує самопочуття.',
      category: 'Здоровʼя',
      image: 'https://images.unsplash.com/photo-1502741338009-cac2772e18bc'
    },
    {
      id: 3,
      title: 'Провітрюйте кімнату',
      description: 'Чисте повітря допомагає краще концентруватися.',
      category: 'Побут',
      image: 'https://images.unsplash.com/photo-1493809842364-78817add7ffb'
    }
  ];
}
