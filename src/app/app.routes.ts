import { Routes, RouterModule } from '@angular/router';
import { LoginModule } from './login/login.module';

export const routes: Routes = [
	{
		path: 'login',
		loadChildren: () =>
			import('./login/login.module').then((m) => m.LoginModule),
	},
	{
		path: 'chat',
		loadChildren: () =>
			import('./medi-chat-gpt-screen/medi-chat-gpt-screen.module').then((m) => m.MediChatGptScreenModule),
	},
	{
		path: '',
		redirectTo: 'login',
		pathMatch: 'full',
	},
	{
		path: '**',
		redirectTo: 'login',
	},
];
