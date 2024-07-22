import { Component, ElementRef, ViewChild, AfterViewInit, Renderer2 } from '@angular/core';
import { MediChatGptScreenService } from '../../services/medi-chat-gpt-screen.service';

@Component({
	selector: 'app-chat-screen',
	templateUrl: './chat-screen.component.html',
	styleUrl: './chat-screen.component.scss'
})
export class ChatScreenComponent implements AfterViewInit {
	patientDataAquired: boolean = false;
	messages: { text: string, sentByMe: boolean }[] = [];
	newMessage: string = '';
	loading = false; // Flag to indicate if loading is happening

	@ViewChild('chatContainer') chatContainer!: ElementRef<HTMLDivElement>;

	constructor(private renderer: Renderer2, private service: MediChatGptScreenService) { }

	ngAfterViewInit() {
		this.scrollToBottom();
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
		this.loading = true;
		this.service.receiveMsg(this.newMessage).subscribe({
			next: (response) => {
				this.loading = false;
				this.messages.push({ text: response.message, sentByMe: false });
			},
			error: (err) => {
				this.loading = false;
				this.messages.push({ text: "Something went wrong!! Please try again after sometime", sentByMe: false });
			}
		})
	}
	private scrollToBottom() {
		if (this.chatContainer) {
			this.chatContainer.nativeElement.scrollTop = this.chatContainer.nativeElement.scrollHeight;
		}
	}

	isPatientDataAquired(flag: any) {
		this.patientDataAquired = flag.patientDataAquired;
	}
}
