import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {
  MatButtonModule,
  MatCheckboxModule,
  MatInputModule,
  MatMenuModule,
  MatSidenavModule,
  MatToolbarModule,
  MatTableModule,
  MatDialogModule,
  MatDatepickerModule,
  MatSelectModule,
  MatCardModule,
  MatFormFieldModule,
  MatGridListModule
} from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from './reducers';
import { TopBarComponent } from './top-bar/top-bar.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { HomePageComponent } from './home-page/home-page.component';
import { RandomSlideshowPageComponent } from './random-slideshow-page/random-slideshow-page.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';
import { SlideshowModule } from 'ng-simple-slideshow';
import { HttpReqInterceptor } from './http-req-interceptor';
import { PhotoService } from './photo.service';
@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    HomePageComponent,
    RandomSlideshowPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatButtonModule,
    StoreModule.forRoot(reducers),
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatMenuModule,
    MatSidenavModule,
    MatToolbarModule,
    MatTableModule,
    HttpClientModule,
    MatDialogModule,
    MatDatepickerModule,
    MatSelectModule,
    MatCardModule,
    MatGridListModule,
    InfiniteScrollModule,
    SlideshowModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: HttpReqInterceptor,
      multi: true
    },
    PhotoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
