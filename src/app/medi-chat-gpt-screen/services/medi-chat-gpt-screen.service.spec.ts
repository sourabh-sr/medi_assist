import { TestBed } from '@angular/core/testing';

import { MediChatGptScreenService } from './medi-chat-gpt-screen.service';

describe('MediChatGptScreenService', () => {
  let service: MediChatGptScreenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MediChatGptScreenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
