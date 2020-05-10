import { TestBed } from '@angular/core/testing';

import { ElservicioService } from './elservicio.service';

describe('ElservicioService', () => {
  let service: ElservicioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ElservicioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
