import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnimalComponent } from './animal/animal.component';
import { HomeComponent } from './home/home.component';
import { OwnerComponent } from './owner/owner.component';
import { AnimalPostComponent } from './animal-post/animal-post.component';
import {AnimalPutComponent } from './animal-put/animal-put.component';
import {AnimalByIdComponent} from './animal-by-id/animal-by-id.component';
import { HospitalComponent } from './hospital/hospital.component';
import { CatsComponent } from './cats/cats.component';
import { DogsComponent } from './dogs/dogs.component';
import { OwnerByIdComponent } from './owner-by-id/owner-by-id.component';
import { OwnerPutComponent } from './owner-put/owner-put.component';
import { OwnerPostComponent } from './owner-post/owner-post.component';
import { OwnerHomeComponent } from './owner-home/owner-home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './auth.guard';
import { AnimalHomeComponent } from './animal-home/animal-home.component';
const routes: Routes = [
  {
    path:"",component: HomeComponent
  },
  
  { path: 'animal', component: AnimalHomeComponent,
    children: [
      { path: '', component: AnimalComponent},
      { path: 'post', component: AnimalPostComponent},
      { path: 'put/:id', component: AnimalPutComponent},
      { path: ':id', component: AnimalByIdComponent, canActivate: [AuthGuard] },
    ]
  },
  // { path: 'animal', component: AnimalHomeComponent,
  //   children: [
  //     { path: '', component: AnimalComponent, canActivate: [AuthGuard] },
  //     { path: 'post', component: AnimalPostComponent},
  //     { path: 'put/:id', component: AnimalPutComponent,
  //       canActivate: [AuthGuard],
  //       data: {
  //         roles: ['ROLE_ADMIN']
  //       }
  //     },
  //     { path: ':id', component: AnimalByIdComponent, canActivate: [AuthGuard] },
  //   ]
  // },
  { path: 'owner', component: OwnerHomeComponent,
    children: [
      { path: '', component: OwnerComponent, canActivate: [AuthGuard] },
      { path: 'post', component: OwnerPostComponent},
      { path: 'put/:id', component: OwnerPutComponent,
        canActivate: [AuthGuard],
        data: {
          roles: ['ROLE_ADMIN']
        }
      },
      { path: ':id', component: OwnerByIdComponent, canActivate: [AuthGuard] },
    ]
  },

  // {
  //   path:"owner",component: OwnerComponent
  // },
  // {
  //   path:"owner/:id",component: OwnerByIdComponent
  // },
  // {
  //   path:"owner/put/:id",component: OwnerPutComponent
  // },
  // {
  //   path:"owner/post",
  //   component: OwnerPostComponent
  // },
  {
    path:"hospital",component: HospitalComponent
  },
  {
    path:"dogs",component: DogsComponent
  },
  {
    path:"cats",component: CatsComponent
  },
  {
    path: 'login',
    component: LoginComponent
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
