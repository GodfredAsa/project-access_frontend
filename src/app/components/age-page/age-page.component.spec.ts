import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgePageComponent } from './age-page.component';

describe('AgePageComponent', () => {
  let component: AgePageComponent;
  let fixture: ComponentFixture<AgePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgePageComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AgePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
