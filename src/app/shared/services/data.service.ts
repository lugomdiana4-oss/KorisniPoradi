import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, of } from 'rxjs';
import { Car } from '../models/car.model';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private cars: Car[] = [
    {
      id: 1,
      brand: 'BMW',
      model: 'X5',
      year: 2020,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRavqSsrQGhMfJdtPXzxCw5ChDe35amcmv4Dg&s',
      price: '$45,000'
    },
    {
      id: 2,
      brand: 'Audi',
      model: 'A4',
      year: 2021,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxTIh1hdlJT2ea48_sOUTQAWAQbhTuQHPO9g&s',
      price: '$39,000'
    },
    {
      id: 3,
      brand: 'Tesla',
      model: 'Model 3',
      year: 2023,
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/2019_Tesla_Model_3_Performance_AWD_Front.jpg',
      price: '$49,000'
    }
  ];

  private carsSubject = new BehaviorSubject<Car[]>(this.cars);

  cars$ = this.carsSubject.asObservable();

  getItems(): Observable<Car[]> {
    return of(this.cars);
  }

  filterItems(query: string): void {
    const filtered = this.cars.filter(car =>
      (car.brand + ' ' + car.model)
        .toLowerCase()
        .includes(query.toLowerCase())
    );
    this.carsSubject.next(filtered);
  }
}
