import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloUnoComponent } from './modelo-uno.component';

describe('ModeloUnoComponent', () => {
  let component: ModeloUnoComponent;
  let fixture: ComponentFixture<ModeloUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModeloUnoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeloUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
