import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FrettirComponent } from './frettir.component';

describe('FrettirComponent', () => {
  let component: FrettirComponent;
  let fixture: ComponentFixture<FrettirComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FrettirComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FrettirComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
