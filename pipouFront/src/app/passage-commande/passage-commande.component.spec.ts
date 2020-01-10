import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PassageCommandeComponent } from './passage-commande.component';

describe('PassageCommandeComponent', () => {
  let component: PassageCommandeComponent;
  let fixture: ComponentFixture<PassageCommandeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PassageCommandeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PassageCommandeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
