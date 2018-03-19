import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T1ComponentComponent } from './t1-component.component';

describe('T1ComponentComponent', () => {
  let component: T1ComponentComponent;
  let fixture: ComponentFixture<T1ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T1ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T1ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
