import { TestBed } from '@angular/core/testing';
import { GdListService } from './gd-list-service';

describe('GdListService', () => {
  let service: GdListService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GdListService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
