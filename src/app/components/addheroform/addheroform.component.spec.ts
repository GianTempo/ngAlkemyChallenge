import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddheroformComponent } from './addheroform.component';

describe('AddheroformComponent', () => {
  let component: AddheroformComponent;
  let fixture: ComponentFixture<AddheroformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddheroformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddheroformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
