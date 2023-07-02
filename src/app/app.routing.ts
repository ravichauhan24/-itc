import { RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';

export const AppRoutes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
    { path: 'basic', loadChildren: () => import('./basic/basic.module').then(m => m.BasicModule) },
    {
        path: 'department',
        loadChildren: () => import('./department/department.module').then(m => m.DepartmentModule)
    },
    {
        path: 'gallery',
        loadChildren: () => import('./gallery/gallery.module').then(m => m.GalleryModule)
    },
    {
        path: 'course',
        loadChildren: () => import('./course/course.module').then(m => m.CourseModule)
    },
    {
        path: 'more',
        loadChildren: () => import('./more/more.module').then(m => m.MoreModule)
    },


];
// Use For Page start at top it is compolosary

@NgModule({
    imports: [RouterModule.forRoot(AppRoutes, { scrollPositionRestoration: 'top', relativeLinkResolution: 'legacy' })],
    exports: [RouterModule]
})
export class AppRoutingModule { }

