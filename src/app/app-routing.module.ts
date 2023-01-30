import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '@guards/auth.guard';
import {NonAuthGuard} from '@guards/non-auth.guard';
import {ForgotPasswordComponent} from '@modules/forgot-password/forgot-password.component';
import {LoginComponent} from '@modules/login/login.component';
import {LogoutComponent} from '@modules/logout/logout.component';
import {MainComponent} from '@modules/main/main.component';
import {MenuSidebarComponent} from '@modules/main/menu-sidebar/menu-sidebar.component';
import {RecoverPasswordComponent} from '@modules/recover-password/recover-password.component';
import {RegisterComponent} from '@modules/register/register.component';
import {BlankComponent} from '@pages/blank/blank.component';
import {DashboardComponent} from '@pages/dashboard/dashboard.component';
import {SubMenuComponent} from '@pages/main-menu/sub-menu/sub-menu.component';
import { PersonnelOverviewComponent } from '@pages/personnel-overview/personnel-overview.component';
import {ProfileComponent} from '@pages/profile/profile.component';

const routes: Routes = [
    {
        path: '',
        component: MainComponent,
        canActivate: [AuthGuard],
        // canActivateChild: [AuthGuard],
        children: [
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'blank',
                component: BlankComponent
            },
            {
                path: 'sub-menu-1',
                component: SubMenuComponent
            },
            {
                path: 'sub-menu-2',
                component: BlankComponent
            },
            {
                path: 'menu-sidebar',
                component: MenuSidebarComponent
            },
            {
                path: '',
                component: DashboardComponent
            },
            {
                path: 'personnel-overview',
                component: PersonnelOverviewComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NonAuthGuard]
    },

    {
        path: 'logout',
        component: LogoutComponent
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'forgot-password',
        component: ForgotPasswordComponent,
        canActivate: [NonAuthGuard]
    },
    {
        path: 'recover-password',
        component: RecoverPasswordComponent,
        canActivate: [NonAuthGuard]
    },
    {path: '**', redirectTo: ''}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {})],
    exports: [RouterModule]
})
export class AppRoutingModule {}
