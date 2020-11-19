import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterGameComponent } from './filter-game.component';

describe('FilterGameComponent', () => {
  let component: FilterGameComponent;
  let fixture: ComponentFixture<FilterGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FilterGameComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
