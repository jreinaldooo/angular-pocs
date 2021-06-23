import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { DynamicFormComponent } from './dynamic-form.component';
import { DynamicFormQuestionComponent } from './dynamic-form-question.component';

import { Themes, UglaModule } from 'ugla';
import { ImportXlsxComponent } from './import-xlsx/import-xlsx.component';
import { AppRoutingModule } from './app-routing.module';
import { CommonModule } from '@angular/common';
import { DynamicFormPageComponent } from './dynamic-form-page/dynamic-form-page.component';

@NgModule({
  imports: [ BrowserModule,
    CommonModule,
    ReactiveFormsModule,
    UglaModule.forRoot({ themeName: Themes.RED }),
    AppRoutingModule
  ],
  declarations: [ AppComponent, DynamicFormComponent, DynamicFormQuestionComponent, ImportXlsxComponent, DynamicFormPageComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule {
  constructor() {
  }
}
