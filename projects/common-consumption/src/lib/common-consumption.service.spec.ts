import { TestBed } from '@angular/core/testing';

import { CommonConsumptionService } from './common-consumption.service';

describe('commonConsumptionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CommonConsumptionService = TestBed.get(CommonConsumptionService);
    expect(service).toBeTruthy();
  });
});
