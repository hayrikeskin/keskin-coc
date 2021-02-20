import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ClarityModule } from '@clr/angular';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClanDetailComponent } from './clan-detail/clan-detail.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ClanPropertiesComponent } from './clan-properties/clan-properties.component';

@NgModule({
  declarations: [
    AppComponent,
    ClanDetailComponent,
    ClanPropertiesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ClarityModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule  
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
