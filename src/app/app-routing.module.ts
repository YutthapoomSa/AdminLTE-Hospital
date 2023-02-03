import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AuthGuard} from '@guards/auth.guard';
import {NonAuthGuard} from '@guards/non-auth.guard';
import {ForgotPasswordComponent} from '@modules/forgot-password/forgot-password.component';
import {RecoverPasswordComponent} from '@modules/recover-password/recover-password.component';
import {MainMenuComponent} from '@pages/main-menu/main-menu.component';
import {SubMenuComponent} from '@pages/main-menu/sub-menu/sub-menu.component';
import {LogoutComponent} from '@modules/logout/logout.component';
import { LoginComponent } from '@modules/login/login.component';
import { MainComponent } from '@modules/main/main.component';
import { RegisterComponent } from '@modules/register/register.component';
import { BlankComponent } from '@pages/blank/blank.component';
import { DashboardComponent } from '@pages/dashboard/dashboard.component';
import { PersonnelOverviewComponent } from '@pages/personnel-overview/personnel-overview.component';
import { ProfileComponent } from '@pages/profile/profile.component';
import { FormLayoutsComponent } from '@pages/form-layouts/form-layouts.component';
import { FormInputsComponent } from '@pages/form-inputs/form-inputs.component';
import { PurchaseOrderComponent } from './pages/purchase-order/purchase-order.component';
import { PurchaseRequisitionComponent } from '@pages/purchase-requisition/purchase-requisition.component';
import { WeatherStationComponent } from './pages/weather-station/weather-station.component';
import { TemperatureComponent } from './pages/temperature/temperature.component';
import {AirQualityComponent} from './pages/air-quality/air-quality.component';
import { OpdEyeComponent } from './pages/opd-eye/opd-eye.component';
import { PracticeFieldComponent } from './pages/practice-field/practice-field.component';
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
                path: '',
                component: DashboardComponent
            },
            {
                path: 'form-inputs',
                component: FormInputsComponent
            },
            {
                path: 'form-layouts',
                component: FormLayoutsComponent
            },
            {
                path: 'profile',
                component: ProfileComponent
            },
            {
                path: 'purchase-order',
                component: PurchaseOrderComponent
            },
            {
                path: 'purchase-requisition',
                component: PurchaseRequisitionComponent
            },
            {
                path: 'weather-station',
                component: WeatherStationComponent
            },
            {
                path: 'temperature',
                component: TemperatureComponent
            },
            {
                path: 'air-quality',
                component: AirQualityComponent
            },
            {
                path: 'opd-eye',
                component: OpdEyeComponent
            },
            {
                path: 'practicet-field',
                component: PracticeFieldComponent
            },
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
