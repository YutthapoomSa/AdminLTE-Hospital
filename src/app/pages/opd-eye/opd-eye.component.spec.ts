import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpdEyeComponent } from './opd-eye.component';

describe('OpdEyeComponent', () => {
  let component: OpdEyeComponent;
  let fixture: ComponentFixture<OpdEyeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpdEyeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpdEyeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
