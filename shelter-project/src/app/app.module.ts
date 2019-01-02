import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalComponent } from './animal/animal.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { OwnerComponent } from './owner/owner.component';
import { AnimalPostComponent } from './animal-post/animal-post.component';
import { AnimalPutComponent } from './animal-put/animal-put.component';
import { AnimalByIdComponent } from './animal-by-id/animal-by-id.component';
import { HospitalComponent } from './hospital/hospital.component';
import { HotelComponent } from './hotel/hotel.component';
import { CatsComponent } from './cats/cats.component';
import { DogsComponent } from './dogs/dogs.component';
import { OwnerByIdComponent } from './owner-by-id/owner-by-id.component';
import { OwnerPutComponent } from './owner-put/owner-put.component';
import { OwnerPostComponent } from './owner-post/owner-post.component';
import { OwnerHomeComponent } from './owner-home/owner-home.component';
import { LoginComponent } from './login/login.component';
import { AnimalHomeComponent } from './animal-home/animal-home.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    HomeComponent,
    HeaderComponent,
    OwnerComponent,
    AnimalPostComponent,
    AnimalPutComponent,
    AnimalByIdComponent,
    HospitalComponent,
    HotelComponent,
    CatsComponent,
    DogsComponent,
    OwnerByIdComponent,
    OwnerPutComponent,
    OwnerPostComponent,
    OwnerHomeComponent,
    LoginComponent,
    AnimalHomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
