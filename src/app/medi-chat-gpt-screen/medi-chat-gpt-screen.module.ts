import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChatScreenComponent } from './components/chat-screen/chat-screen.component';
import { UserInfoScreenComponent } from './components/user-info-screen/user-info-screen.component';
import { MediChatGptScreenRoutingModule } from './medi-chat-gpt-screen-routing.module';
import { SharedModule } from '../shared/shared/shared.module';


@NgModule({
  declarations: [ChatScreenComponent, UserInfoScreenComponent],
  imports: [
    CommonModule,
    MediChatGptScreenRoutingModule,
    SharedModule
  ]
})
export class MediChatGptScreenModule { }
