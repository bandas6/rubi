import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalGeneralUnoComponent } from './modal-general-uno.component';

describe('ModalGeneralUnoComponent', () => {
  let component: ModalGeneralUnoComponent;
  let fixture: ComponentFixture<ModalGeneralUnoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalGeneralUnoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalGeneralUnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
