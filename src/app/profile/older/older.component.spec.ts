import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OlderComponent } from './older.component';

describe('OlderComponent', () => {
  let component: OlderComponent;
  let fixture: ComponentFixture<OlderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OlderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OlderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
