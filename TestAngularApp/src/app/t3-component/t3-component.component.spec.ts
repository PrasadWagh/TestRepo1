import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T3ComponentComponent } from './t3-component.component';

describe('T3ComponentComponent', () => {
  let component: T3ComponentComponent;
  let fixture: ComponentFixture<T3ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T3ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T3ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
