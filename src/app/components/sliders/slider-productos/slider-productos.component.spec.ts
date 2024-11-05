import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SliderProductosComponent } from './slider-productos.component';

describe('SliderComponent', () => {
  let component: SliderProductosComponent;
  let fixture: ComponentFixture<SliderProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SliderProductosComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SliderProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
