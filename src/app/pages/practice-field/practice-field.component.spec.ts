import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeFieldComponent } from './practice-field.component';

describe('PracticeFieldComponent', () => {
  let component: PracticeFieldComponent;
  let fixture: ComponentFixture<PracticeFieldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeFieldComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PracticeFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
