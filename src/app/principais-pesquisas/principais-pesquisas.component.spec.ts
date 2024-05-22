import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrincipaisPesquisasComponent } from './principais-pesquisas.component';

describe('PrincipaisPesquisasComponent', () => {
  let component: PrincipaisPesquisasComponent;
  let fixture: ComponentFixture<PrincipaisPesquisasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrincipaisPesquisasComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrincipaisPesquisasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
