import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

<<<<<<< HEAD
import { AppComponent } from './app.component';
import { MouduluModule } from './moudulu/moudulu.module';
import { TestModule } from './test/test.module';
=======
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './heroes/heroes.component';
import { FormsModule } from '@angular/forms';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
>>>>>>> 70b9832 (add files)

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
  ],
  imports: [
    BrowserModule,
    MouduluModule,
    TestModule
=======
    HeroesComponent,
    HeroDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
>>>>>>> 70b9832 (add files)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
