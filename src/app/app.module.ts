import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from "@angular/material/icon";
import {MatMenuModule} from "@angular/material/menu";
import {MatButtonModule} from "@angular/material/button";
import {MatBadgeModule} from "@angular/material/badge";
import {MatInputModule} from "@angular/material/input";
import {ReactiveFormsModule} from "@angular/forms";
import {MatAutocompleteModule} from "@angular/material/autocomplete";

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatButtonModule,
    MatBadgeModule,
    MatInputModule,
    ReactiveFormsModule,
    MatAutocompleteModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
