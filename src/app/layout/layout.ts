import { Component } from '@angular/core';
import { Header } from './header/header';
import { Footer } from './footer/footer';
import { ItemsListComponent } from '../items-list/items-list';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [
    Header,
    Footer,
    ItemsListComponent
  ],
  templateUrl: './layout.html',
  styleUrls: ['./layout.css']
})
export class Layout {}
