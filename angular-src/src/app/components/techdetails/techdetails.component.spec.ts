import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TechdetailsComponent } from './techdetails.component';

describe('TechdetailsComponent', () => {
  let component: TechdetailsComponent;
  let fixture: ComponentFixture<TechdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TechdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TechdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
