import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AbenwoodSubscribeComponent } from './abenwood-subscribe.component';

describe('AbenwoodSubscribeComponent', () => {
  let component: AbenwoodSubscribeComponent;
  let fixture: ComponentFixture<AbenwoodSubscribeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AbenwoodSubscribeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AbenwoodSubscribeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
