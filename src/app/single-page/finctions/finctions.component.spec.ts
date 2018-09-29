import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FinctionsComponent } from './finctions.component';

describe('FinctionsComponent', () => {
  let component: FinctionsComponent;
  let fixture: ComponentFixture<FinctionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FinctionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FinctionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
