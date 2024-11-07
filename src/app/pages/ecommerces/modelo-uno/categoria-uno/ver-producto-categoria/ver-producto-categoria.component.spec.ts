import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerProductoCategoriaComponent } from './ver-producto-categoria.component';

describe('VerComponent', () => {
  let component: VerProductoCategoriaComponent;
  let fixture: ComponentFixture<VerProductoCategoriaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerProductoCategoriaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VerProductoCategoriaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
