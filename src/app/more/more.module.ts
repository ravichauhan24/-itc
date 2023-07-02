import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeModule } from '../home/home.module';
import { RouterModule } from '@angular/router';
import { MoreRoutes } from './more.routing';
import { SharedModule } from '../shared/shared.module';
import { LibraryComponent } from './library/library.component';
import { ResultComponent } from './result/result.component';
import { CampusComponent } from './campus/campus.component';
import { SearchComponent } from './search/search.component';
import { AcademicCalendarComponent } from './academic-calendar/academic-calendar.component';
import { FormComponent } from './form/form.component';
import { MagazineComponent } from './magazine/magazine.component';
import { NewsComponent } from './news/news.component';
import { PaperComponent } from './paper/paper.component';
import { ScholarshipsComponent } from './scholarships/scholarships.component';
import { SyllabusComponent } from './syllabus/syllabus.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';



@NgModule({
  declarations: [
    LibraryComponent,
    ResultComponent,
    CampusComponent,
    SearchComponent,
    AcademicCalendarComponent,
    FormComponent,
    MagazineComponent,
    NewsComponent,
    PaperComponent,
    ScholarshipsComponent,
    SyllabusComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(MoreRoutes),
    HomeModule,
    SharedModule,
    NgxPaginationModule,
    NgbModule
  ]
})
export class MoreModule { }
