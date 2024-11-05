import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModeloGeneralComponent } from './modelo-general.component';

describe('ModeloGeneralComponent', () => {
  let component: ModeloGeneralComponent;
  let fixture: ComponentFixture<ModeloGeneralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModeloGeneralComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModeloGeneralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
