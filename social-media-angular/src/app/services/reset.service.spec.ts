import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ResetService } from './reset.service';

describe('ResetService', () => {
  let service: ResetService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, HttpClientModule, RouterTestingModule],
      providers: [HttpClient]
    });
    service = TestBed.inject(ResetService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
