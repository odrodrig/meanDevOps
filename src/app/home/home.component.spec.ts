import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { FeaturedProductsComponent } from '../featured-products/featured-products.component';
import { FeaturedPromosComponent } from '../featured-promos/featured-promos.component';

import { HomeComponent } from './home.component';

describe('HomeComponent', () => {
  let component: HomeComponent;
  let fixture: ComponentFixture<HomeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
         HomeComponent,
         FeaturedProductsComponent,
         FeaturedPromosComponent
        ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
