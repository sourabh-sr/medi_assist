import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
	selector: 'app-chat-screen',
	templateUrl: './chat-screen.component.html',
	styleUrl: './chat-screen.component.scss'
})
export class ChatScreenComponent {
	messages: { text: string, sentByMe: boolean }[] = [];
	newMessage: string = '';
	@ViewChild('chatContainer') private chatContainerRef!: ElementRef;

	constructor(private renderer: Renderer2) {

	}
	sendMessage() {
		if (this.newMessage.trim() !== '') {
			this.messages.push({ text: this.newMessage, sentByMe: true });

			if (this.newMessage.trim() == 'hi') {
				this.messages.push({ text: 'Hello!, What can I do for you today', sentByMe: false });
			}
			this.newMessage = '';
		}
		this.scrollToBottom();
	}

	scrollToBottom() {
		// this.chatContainerRef.nativeElement.scrollTop = this.chatContainerRef.nativeElement.scrollHeight;

		const chatContainer = this.chatContainerRef.nativeElement;
		// chatContainer.scrollTop = chat	Container.scrollHeight;

		// const container = this.chatContainerRef.nativeElement;
		// const scrollHeight = container.scrollHeight;
		// const clientHeight = container.clientHeight;
		// const maxScrollTop = scrollHeight - clientHeight;
		// this.renderer.setProperty(container, 'scrollTop', maxScrollTop);

	}
}