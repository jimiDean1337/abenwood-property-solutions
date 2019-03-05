import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbenwoodSearchComponent } from './abenwood-search.component';

describe('AbenwoodSearchComponent', () => {
  let component: AbenwoodSearchComponent;
  let fixture: ComponentFixture<AbenwoodSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbenwoodSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbenwoodSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
