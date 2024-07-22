import { Component, ElementRef, OnInit, Output, ViewChild, EventEmitter } from '@angular/core';
import { MatAccordion } from '@angular/material/expansion';
import { MediChatGptScreenService } from '../../services/medi-chat-gpt-screen.service';

@Component({
	selector: 'app-user-info-screen',
	templateUrl: './user-info-screen.component.html',
	styleUrl: './user-info-screen.component.scss',
})

export class UserInfoScreenComponent implements OnInit {
	@ViewChild(MatAccordion) accordion!: MatAccordion;
	@ViewChild('textarea', { static: true }) textarea!: ElementRef<HTMLTextAreaElement>;
	@Output() patientDataAquired = new EventEmitter<any>();

	constructor(private service: MediChatGptScreenService) { }

	ngOnInit(): void {
		this.textarea.nativeElement.addEventListener('input', this.onInput.bind(this));
		this.adjustHeight(); // Initial height adjustment
	}


	onInput(event: Event) {
		this.adjustHeight();
	}

	adjustHeight() {
		const textarea = this.textarea.nativeElement;
		textarea.style.height = '1px';
		textarea.style.height = `${textarea.scrollHeight}px`;
	}

	step = 0;
	patient_id: any;
	patient_name: any;
	age: any;
	birth_order: any;
	birthOrders: any = ['Singleton', 'Triplet'];
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
		this.patientDataAquired.emit({"patientDataAquired": true})
	}

	submit() {

	}

}
