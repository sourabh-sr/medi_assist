import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-user-info-screen',
  templateUrl: './user-info-screen.component.html',
  styleUrl: './user-info-screen.component.scss'
})

export class UserInfoScreenComponent {
  @ViewChild(MatAccordion) accordion!: MatAccordion;
  constructor() {}

  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
  
}
