import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T2ComponentComponent } from './t2-component.component';

describe('T2ComponentComponent', () => {
  let component: T2ComponentComponent;
  let fixture: ComponentFixture<T2ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T2ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T2ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
