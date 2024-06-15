import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
	selector: 'app-sign-in-page',
	templateUrl: './sign-in-page.component.html',
	styleUrl: './sign-in-page.component.scss',
})
export class SignInPageComponent {

	constructor(public router: Router) {

	}

	login() {
		this.router.navigate(['/chat']);
	}
}
