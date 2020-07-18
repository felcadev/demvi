import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyConversorComponent } from './body-conversor.component';

describe('BodyConversorComponent', () => {
  let component: BodyConversorComponent;
  let fixture: ComponentFixture<BodyConversorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BodyConversorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BodyConversorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
