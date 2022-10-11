import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComponouComponent } from './componou.component';

describe('ComponouComponent', () => {
  let component: ComponouComponent;
  let fixture: ComponentFixture<ComponouComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComponouComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ComponouComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
