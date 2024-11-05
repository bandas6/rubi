import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CategoriaDosComponent } from './categoria-dos.component';

describe('CategoriaDosComponent', () => {
  let component: CategoriaDosComponent;
  let fixture: ComponentFixture<CategoriaDosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CategoriaDosComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CategoriaDosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
