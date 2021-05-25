import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { TopheadingComponent } from './topheading.component';

describe('TopheadingComponent', () => {
  let component: TopheadingComponent;
  let fixture: ComponentFixture<TopheadingComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ TopheadingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TopheadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
