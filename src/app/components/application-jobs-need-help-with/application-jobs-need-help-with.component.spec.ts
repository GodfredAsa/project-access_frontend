import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ApplicationJobsNeedHelpWithComponent } from './application-jobs-need-help-with.component';

describe('ApplicationJobsNeedHelpWithComponent', () => {
  let component: ApplicationJobsNeedHelpWithComponent;
  let fixture: ComponentFixture<ApplicationJobsNeedHelpWithComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ApplicationJobsNeedHelpWithComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ApplicationJobsNeedHelpWithComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
