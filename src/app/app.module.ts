import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturedPromosComponent } from './featured-promos/featured-promos.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { CatalogComponent } from './catalog/catalog.component';
import { HomeComponent } from './home/home.component';
import { ItemDetailsComponent } from './item-details/item-details.component';
import { CartDetailsComponent } from './cart-details/cart-details.component';

const appRoutes = [
  { path: '', component: HomeComponent},
  { path: 'catalog', component: CatalogComponent},
  { path: 'itemDetails', component: ItemDetailsComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    FeaturedPromosComponent,
    FeaturedProductsComponent,
    CatalogComponent,
    HomeComponent,
    ItemDetailsComponent,
    CartDetailsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
