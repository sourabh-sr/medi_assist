import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignInPageComponent } from './components/sign-in-page/sign-in-page.component';
import path from 'path';
import { SignUpPageComponent } from './components/sign-up-page/sign-up-page.component';

const routes: Routes = [
	{
		path: '',
		component: SignInPageComponent,
		children: [
			{
				path: 'sign-up',
				component: SignUpPageComponent,
			},
		],
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule],
}) 
export class LoginRoutingModule {}
