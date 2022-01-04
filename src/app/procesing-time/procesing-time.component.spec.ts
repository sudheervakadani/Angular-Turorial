import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesingTimeComponent } from './procesing-time.component';

describe('ProcesingTimeComponent', () => {
  let component: ProcesingTimeComponent;
  let fixture: ComponentFixture<ProcesingTimeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcesingTimeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesingTimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
