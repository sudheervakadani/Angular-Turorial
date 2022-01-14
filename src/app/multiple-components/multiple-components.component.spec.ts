import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MultipleComponentsComponent } from './multiple-components.component';

describe('MultipleComponentsComponent', () => {
  let component: MultipleComponentsComponent;
  let fixture: ComponentFixture<MultipleComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MultipleComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MultipleComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
