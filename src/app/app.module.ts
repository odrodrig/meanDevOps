import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FeaturedPromosComponent } from './featured-promos/featured-promos.component';
import { FeaturedProductsComponent } from './featured-products/featured-products.component';
import { CatalogComponent } from './catalog/catalog.component';

const appRoutes = [
  { path: '', component: AppComponent},
  { catalog: 'catalog', component: CatalogComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    FeaturedPromosComponent,
    FeaturedProductsComponent,
    CatalogComponent
  ],
  imports: [
    BrowserModule,
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
