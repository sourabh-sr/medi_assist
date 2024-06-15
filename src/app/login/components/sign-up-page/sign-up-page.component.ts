import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-sign-up-page',
	templateUrl: './sign-up-page.component.html',
	styleUrl: './sign-up-page.component.scss',
})
export class SignUpPageComponent {

	userName: any = null;
	email: any = null;
	password: any = null;
	rePassword: any = null;
	constructor(public router: Router) {

	}
	backToSignIn() {
		this.router.navigate(['login'])
	}

}
