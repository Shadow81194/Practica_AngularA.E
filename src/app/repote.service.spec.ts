import { TestBed } from '@angular/core/testing';
import { RepoteService } from './repote.service';

describe('RepoteService', () => {
  let service: RepoteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RepoteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
