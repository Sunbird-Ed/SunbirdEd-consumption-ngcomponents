import { TestBed } from '@angular/core/testing';

import { ConsumptionComponentsService } from './consumption-components.service';

describe('ConsumptionComponentsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConsumptionComponentsService = TestBed.get(ConsumptionComponentsService);
    expect(service).toBeTruthy();
  });
});
