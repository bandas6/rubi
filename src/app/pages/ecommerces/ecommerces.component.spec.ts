import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EcommercesComponent } from './ecommerces.component';

describe('EcommercesComponent', () => {
  let component: EcommercesComponent;
  let fixture: ComponentFixture<EcommercesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EcommercesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EcommercesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
