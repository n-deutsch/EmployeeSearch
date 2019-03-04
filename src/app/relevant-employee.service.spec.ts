import { TestBed } from '@angular/core/testing';

import { RelevantEmployeeService } from './relevant-employee.service';

describe('RelevantEmployeeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RelevantEmployeeService = TestBed.get(RelevantEmployeeService);
    expect(service).toBeTruthy();
  });
});
