import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatScreenComponent } from './medi-chat-gpt-screen/components/chat-screen/chat-screen.component';
import { UserInfoScreenComponent } from './medi-chat-gpt-screen/components/user-info-screen/user-info-screen.component';

@NgModule({
	declarations: [
		AppComponent,
		ChatScreenComponent,
		UserInfoScreenComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule
	],
	providers: [
		provideClientHydration()
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
