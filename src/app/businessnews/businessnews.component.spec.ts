import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { BusinessnewsComponent } from './businessnews.component';

describe('BusinessnewsComponent', () => {
  let component: BusinessnewsComponent;
  let fixture: ComponentFixture<BusinessnewsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ BusinessnewsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BusinessnewsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
