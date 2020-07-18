import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyIndicadoresComponent } from './body-indicadores.component';

describe('BodyIndicadoresComponent', () => {
  let component: BodyIndicadoresComponent;
  let fixture: ComponentFixture<BodyIndicadoresComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyIndicadoresComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyIndicadoresComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
