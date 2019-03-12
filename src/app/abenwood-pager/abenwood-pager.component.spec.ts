import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbenwoodPagerComponent } from './abenwood-pager.component';

describe('AbenwoodPagerComponent', () => {
  let component: AbenwoodPagerComponent;
  let fixture: ComponentFixture<AbenwoodPagerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbenwoodPagerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbenwoodPagerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
