import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';
import { MediChatGptScreenService } from '../../services/medi-chat-gpt-screen.service';

@Component({
	selector: 'app-chat-screen',
	templateUrl: './chat-screen.component.html',
	styleUrl: './chat-screen.component.scss'
})
export class ChatScreenComponent {
	messages: { text: string, sentByMe: boolean }[] = [];
	newMessage: string = '';
	patientDataAquired: boolean = false;
	@ViewChild('chatContainer') private chatContainerRef!: ElementRef;

	constructor(private renderer: Renderer2, private service: MediChatGptScreenService) {

	}
	sendMessage() {
		if (this.newMessage.trim() !== '') {
			this.messages.push({ text: this.newMessage, sentByMe: true });

			if (this.newMessage.trim() == 'hi') {
				this.messages.push({ text: 'Hello!, What can I do for you today', sentByMe: false });
			} else {
				this.receiveMsg()
			}
			this.newMessage = '';
		}
	}

	receiveMsg() {
		this.service.receiveMsg(this.newMessage).subscribe({
			next: (response) => {
				this.messages.push({ text: response.message, sentByMe: false });
			},
			error: (err) => {

			}
		})
	}

	isPatientDataAquired(flag: any) {
		this.patientDataAquired = flag.patientDataAquired;
	}
}