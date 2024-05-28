import { ComponentFixture, TestBed } from '@angular/core/testing';

import  InovacoesComponent  from './inovacoes.component';

describe('InovacoesComponent', () => {
  let component: InovacoesComponent;
  let fixture: ComponentFixture<InovacoesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InovacoesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(InovacoesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
