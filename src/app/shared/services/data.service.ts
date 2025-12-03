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
      price: '$45,000',

      engine: '3.0L Turbo Petrol',
      horsepower: 340,
      mileage: 45000,
      color: 'Black',
      transmission: 'Automatic (8AT)',
      driveType: 'AWD',
      description: 'Преміальний кроссовер з високим рівнем комфорту та динаміки.'
    },
    {
      id: 2,
      brand: 'Audi',
      model: 'A4',
      year: 2021,
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxTIh1hdlJT2ea48_sOUTQAWAQbhTuQHPO9g&s',
      price: '$39,000',

      engine: '2.0L TFSI',
      horsepower: 250,
      mileage: 30000,
      color: 'White',
      transmission: 'Automatic (7DSG)',
      driveType: 'FWD',
      description: 'Комфортний та сучасний седан бізнес-класу.'
    },
    {
      id: 3,
      brand: 'Tesla',
      model: 'Model 3',
      year: 2023,
      image: 'https://upload.wikimedia.org/wikipedia/commons/9/91/2019_Tesla_Model_3_Performance_AWD_Front.jpg',
      price: '$49,000',

      engine: 'Electric Dual Motor',
      horsepower: 450,
      mileage: 12000,
      color: 'Red',
      transmission: 'Single Speed',
      driveType: 'AWD',
      description: 'Електромобіль з високою динамікою та передовими технологіями.'
    }
  ];


  private carsSubject = new BehaviorSubject<Car[]>(this.cars);

  cars$ = this.carsSubject.asObservable();

  filterItems(query: string): void {
    const filtered = this.cars.filter(car =>
      (car.brand + ' ' + car.model)
        .toLowerCase()
        .includes(query.toLowerCase())
    );
    this.carsSubject.next(filtered);
  }

  getById(id: number): Car | undefined {
    return this.cars.find(car => car.id === id);
  }
}
