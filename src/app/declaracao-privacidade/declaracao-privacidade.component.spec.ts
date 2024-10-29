import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DeclaracaoPrivacidadeComponent } from './declaracao-privacidade.component';

describe('DeclaracaoPrivacidadeComponent', () => {
  let component: DeclaracaoPrivacidadeComponent;
  let fixture: ComponentFixture<DeclaracaoPrivacidadeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DeclaracaoPrivacidadeComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DeclaracaoPrivacidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
