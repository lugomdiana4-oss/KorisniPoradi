import { Routes } from '@angular/router';
import { ItemsList } from './item-list/item-list';
import { ItemDetails } from './item-details/item-details';

export const routes: Routes = [
  { path: 'items', component: ItemsList },
  { path: 'items/:id', component: ItemDetails },
  { path: '', redirectTo: 'items', pathMatch: 'full' }
];
