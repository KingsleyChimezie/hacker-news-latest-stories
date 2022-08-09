import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { StoriesService } from './stories.service';

describe('StoriesService', () => {
  let service: StoriesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [StoriesService]
    });
    service = TestBed.inject(StoriesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
