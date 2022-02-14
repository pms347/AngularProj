import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  constructor(private route:Router) {}

  ngOnInit(): void {
  }
  buttonClick(): void {
    this.route.navigate(['./notepad']);
  }
}
