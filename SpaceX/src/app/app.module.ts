import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ProgramsComponent } from './programs/programs.component';
import { FiltersComponent } from './programs/filters/filters.component';
import { SpacexProgramsComponent } from './programs/spacex-programs/spacex-programs.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProgramsComponent,
    FiltersComponent,
    SpacexProgramsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
