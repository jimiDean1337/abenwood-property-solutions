import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbenwoodTopNavbarComponent } from './abenwood-top-navbar.component';

describe('AbenwoodTopNavbarComponent', () => {
  let component: AbenwoodTopNavbarComponent;
  let fixture: ComponentFixture<AbenwoodTopNavbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbenwoodTopNavbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbenwoodTopNavbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
