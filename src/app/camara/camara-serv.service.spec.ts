import { TestBed } from '@angular/core/testing';

import { CamaraServService } from './camara-serv.service';

describe('CamaraServService', () => {
  let service: CamaraServService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CamaraServService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
