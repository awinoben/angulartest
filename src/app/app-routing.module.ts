import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
import { PatientCreateComponent } from './patient-create/patient-create.component';


const routes: Routes = [{ path:  '', redirectTo:  'patients', pathMatch:  'full' },
                        { path:  'patients',    component:  PatientListComponent},
                        { path:  'create-patient',    component:  PatientCreateComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
