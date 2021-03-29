import { TestBed } from '@angular/core/testing';

import { ProcessPanelService } from './process-panel.service';

describe('ProcessPanelService', () => {
  let service: ProcessPanelService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProcessPanelService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
