import { Component } from '@angular/core';
import { Routes } from '@angular/router';
import { CalcComponent } from './calc/calc.component';

const routes: Routes = [
  {path:'calc', component:CalcComponent},
];

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MyProj';
}
