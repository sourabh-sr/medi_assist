import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { SignInPageComponent } from './components/sign-in-page/sign-in-page.component';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
	declarations: [
		SignInPageComponent,
		SignUpPageComponent
	],
	imports: [
		CommonModule,
		LoginRoutingModule,
		SharedModule
	]
})
export class LoginModule { }
