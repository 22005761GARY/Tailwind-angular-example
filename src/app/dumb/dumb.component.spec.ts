import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DumbComponent } from './dumb.component';

describe('DumbComponent', () => {
  let component: DumbComponent;
  let fixture: ComponentFixture<DumbComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DumbComponent]
    });
    fixture = TestBed.createComponent(DumbComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
