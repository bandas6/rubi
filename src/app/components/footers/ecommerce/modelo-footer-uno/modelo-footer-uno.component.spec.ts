import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloFooterUnoComponent } from './modelo-footer-uno.component';

describe('ModeloFooterUnoComponent', () => {
  let component: ModeloFooterUnoComponent;
  let fixture: ComponentFixture<ModeloFooterUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModeloFooterUnoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeloFooterUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
