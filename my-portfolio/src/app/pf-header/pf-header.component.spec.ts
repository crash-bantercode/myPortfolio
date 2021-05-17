import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PfHeaderComponent } from './pf-header.component';

describe('PfHeaderComponent', () => {
  let component: PfHeaderComponent;
  let fixture: ComponentFixture<PfHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PfHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PfHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
