import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchCountriesComponent } from './components/search-countries/search-countries.component';
import { SearchHistoryComponent } from './components/search-history/search-history.component';
import { SearchInputComponent } from './components/search-input/search-input.component';
import { SearchResultComponent } from './components/search-result/search-result.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchCountriesComponent,
    SearchHistoryComponent,
    SearchInputComponent,
    SearchResultComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
