import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaUnoComponent } from './categoria-uno.component';

describe('CategoriaUnoComponent', () => {
  let component: CategoriaUnoComponent;
  let fixture: ComponentFixture<CategoriaUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriaUnoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
