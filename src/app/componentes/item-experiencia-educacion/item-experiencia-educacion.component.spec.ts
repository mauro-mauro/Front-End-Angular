import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemExperienciaEducacionComponent } from './item-experiencia-educacion.component';

describe('ItemExperienciaEducacionComponent', () => {
  let component: ItemExperienciaEducacionComponent;
  let fixture: ComponentFixture<ItemExperienciaEducacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemExperienciaEducacionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemExperienciaEducacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
