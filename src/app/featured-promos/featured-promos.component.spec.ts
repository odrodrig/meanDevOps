import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FeaturedPromosComponent } from './featured-promos.component';

describe('FeaturedPromosComponent', () => {
  let component: FeaturedPromosComponent;
  let fixture: ComponentFixture<FeaturedPromosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FeaturedPromosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FeaturedPromosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
