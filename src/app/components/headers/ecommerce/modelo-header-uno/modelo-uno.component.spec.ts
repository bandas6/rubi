import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloHeaderUnoComponent } from './modelo-header-uno.component';

describe('ModeloUnoComponent', () => {
  let component: ModeloHeaderUnoComponent;
  let fixture: ComponentFixture<ModeloHeaderUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModeloHeaderUnoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeloHeaderUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
