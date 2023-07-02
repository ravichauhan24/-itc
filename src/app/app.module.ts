import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { AppRoutes,AppRoutingModule } from './app.routing';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselModule } from 'ngx-owl-carousel-o';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BasicModule } from './basic/basic.module';
import { DepartmentModule } from './department/department.module';
import { CourseModule } from './course/course.module';
import { MoreModule } from './more/more.module';
import { HttpClientModule } from '@angular/common/http';
import { NgxPaginationModule } from 'ngx-pagination';
import { ToastrModule } from 'ngx-toastr';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    NgbModule,
    RouterModule.forRoot(AppRoutes, {
      useHash: true
    }),
    CarouselModule,
    BrowserAnimationsModule,
    BasicModule,
    DepartmentModule,
    CourseModule,
    MoreModule,
    AppRoutingModule,
    HttpClientModule,
    NgxPaginationModule,
    ToastrModule.forRoot(),
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
