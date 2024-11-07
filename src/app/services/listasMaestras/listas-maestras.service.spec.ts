import { TestBed } from '@angular/core/testing';

import { ListasMaestrasService } from './listas-maestras.service';

describe('ListasMaestrasService', () => {
  let service: ListasMaestrasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListasMaestrasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
