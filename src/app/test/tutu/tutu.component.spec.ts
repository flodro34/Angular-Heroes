import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TutuComponent } from './tutu.component';

describe('TutuComponent', () => {
  let component: TutuComponent;
  let fixture: ComponentFixture<TutuComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TutuComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TutuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
