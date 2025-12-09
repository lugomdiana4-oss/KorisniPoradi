import { Injectable } from '@angular/core';
import { Advice } from './models/advice.model';
import { BehaviorSubject, Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private adviceList: Advice[] = [
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
  private itemsSubject = new BehaviorSubject<Advice[]>(this.adviceList);

  items$ = this.itemsSubject.asObservable();

  getItems(): Observable<Advice[]> {
    return of(this.adviceList);
  }

  filterItems(search: string) {
    const filtered = this.adviceList.filter(item =>
      item.title.toLowerCase().includes(search.toLowerCase())
    );

    this.itemsSubject.next(filtered);
  }
}
