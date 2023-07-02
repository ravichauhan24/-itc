import { Routes } from '@angular/router';
import { SyllabusComponent } from './syllabus/syllabus.component';

export const CourseRoutes: Routes = [{
    path: '',
    children: [
    {
        path: 'syllabus',
        component: SyllabusComponent
    },
    ]
}];
