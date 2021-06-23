import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ImportXlsxComponent } from './import-xlsx/import-xlsx.component';
import { DynamicFormComponent } from './dynamic-form.component';
import { AppComponent } from './app.component';
import { DynamicFormPageComponent } from './dynamic-form-page/dynamic-form-page.component';

const routes: Routes = [
  {path: '', component: AppComponent },
  { path: 'import-xlsx', component: ImportXlsxComponent },
  { path: 'dynamic-form', component: DynamicFormPageComponent }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
