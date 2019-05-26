import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DragUserComponent } from './drag-user.component';

describe('DragUserComponent', () => {
  let component: DragUserComponent;
  let fixture: ComponentFixture<DragUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DragUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DragUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
