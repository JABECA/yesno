/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { PeticionesServiceService } from './peticiones-service.service';

describe('Service: PeticionesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PeticionesServiceService]
    });
  });

  it('should ...', inject([PeticionesServiceService], (service: PeticionesServiceService) => {
    expect(service).toBeTruthy();
  }));
});
