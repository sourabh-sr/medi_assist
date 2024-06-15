import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChatScreenComponent } from './components/chat-screen/chat-screen.component';

const routes: Routes = [
  {
		path: '',
		component: ChatScreenComponent,
	},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MediChatGptScreenRoutingModule { }
