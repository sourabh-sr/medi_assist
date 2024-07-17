import { Component, ViewChild } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';

@Component({
	selector: 'app-user-info-screen',
	templateUrl: './user-info-screen.component.html',
	styleUrl: './user-info-screen.component.scss'
})

export class UserInfoScreenComponent {
	@ViewChild(MatAccordion) accordion!: MatAccordion;
	constructor() { }

	step = 0;
	patient_id: any;
	patient_name: any;
	age: any;
	birth_order: any;
	birthOrders:any = ['Singleton', 'Triplet'];
	birth_weight: any;
	current_weight: any;
	routes: any = ['IV', 'Oral'];
	route: any;
	indication: any;
	medication: any;
	dose: any;
	frequency: any;
	doctor_name: any;

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
