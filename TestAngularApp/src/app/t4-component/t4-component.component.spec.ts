import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { T4ComponentComponent } from './t4-component.component';

describe('T4ComponentComponent', () => {
  let component: T4ComponentComponent;
  let fixture: ComponentFixture<T4ComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ T4ComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(T4ComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
