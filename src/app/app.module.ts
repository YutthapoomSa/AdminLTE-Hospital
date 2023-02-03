import {AppRoutingModule} from '@/app-routing.module';
import {registerLocaleData} from '@angular/common';
import {HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import localeEn from '@angular/common/locales/en';
import {NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {ButtonComponent} from '@components/button/button.component';
import {CheckboxComponent} from '@components/checkbox/checkbox.component';
import {DropdownMenuComponent} from '@components/dropdown/dropdown-menu/dropdown-menu.component';
import {DropdownComponent} from '@components/dropdown/dropdown.component';
import {SelectComponent} from '@components/select/select.component';
import {ForgotPasswordComponent} from '@modules/forgot-password/forgot-password.component';
import {LoginComponent} from '@modules/login/login.component';
import {LogoutComponent} from '@modules/logout/logout.component';
import {FooterComponent} from '@modules/main/footer/footer.component';
import {HeaderComponent} from '@modules/main/header/header.component';
import {LanguageComponent} from '@modules/main/header/language/language.component';
import {MessagesComponent} from '@modules/main/header/messages/messages.component';
import {NotificationsComponent} from '@modules/main/header/notifications/notifications.component';
import {UserComponent} from '@modules/main/header/user/user.component';
import {MainComponent} from '@modules/main/main.component';
import {MenuSidebarComponent} from '@modules/main/menu-sidebar/menu-sidebar.component';
import {RecoverPasswordComponent} from '@modules/recover-password/recover-password.component';
import {RegisterComponent} from '@modules/register/register.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {StoreModule} from '@ngrx/store';
import {BlankComponent} from '@pages/blank/blank.component';
import {DashboardComponent} from '@pages/dashboard/dashboard.component';
import {FormInputsComponent} from '@pages/form-inputs/form-inputs.component';
import {FormLayoutsComponent} from '@pages/form-layouts/form-layouts.component';
import {ProfileComponent} from '@pages/profile/profile.component';
import {InterceptorInterceptor} from '@services/interceptor/interceptor.interceptor';
import {NgSelect2Module} from 'ng-select2';
import {ChartsModule} from 'ng2-charts';
import {PdfViewerModule} from 'ng2-pdf-viewer';
import {ToastrModule} from 'ngx-toastr';
import {AppComponent} from './app.component';
import {MenuItemComponent} from './components/menu-item/menu-item.component';
import {PreviewPdfComponent} from './components/preview-pdf/preview-pdf.component';
import {ControlSidebarComponent} from './modules/main/control-sidebar/control-sidebar.component';
import {MainMenuComponent} from './pages/main-menu/main-menu.component';
import {SubMenuComponent} from './pages/main-menu/sub-menu/sub-menu.component';
import {authReducer} from './store/auth/reducer';
import {uiReducer} from './store/ui/reducer';
import { PurchaseOrderComponent } from './pages/purchase-order/purchase-order.component';
import { PurchaseRequisitionComponent } from './pages/purchase-requisition/purchase-requisition.component';
import { WeatherStationComponent } from './pages/weather-station/weather-station.component';
import { TemperatureComponent } from './pages/temperature/temperature.component';
import { AirQualityComponent } from './pages/air-quality/air-quality.component';
import { OpdEyeComponent } from './pages/opd-eye/opd-eye.component';
import { PracticeFieldComponent } from './pages/practice-field/practice-field.component';
registerLocaleData(localeEn, 'en-EN');

@NgModule({
    declarations: [
        AppComponent,
        MainComponent,
        LoginComponent,
        HeaderComponent,
        FooterComponent,
        MenuSidebarComponent,
        BlankComponent,
        ProfileComponent,
        RegisterComponent,
        DashboardComponent,
        MessagesComponent,
        NotificationsComponent,
        UserComponent,
        ForgotPasswordComponent,
        RecoverPasswordComponent,
        LanguageComponent,
        MainMenuComponent,
        SubMenuComponent,
        MenuItemComponent,
        ControlSidebarComponent,
        // SidebarSearchComponent,
        ButtonComponent,
        CheckboxComponent,
        FooterComponent,
        DropdownMenuComponent,
        DropdownComponent,
        SelectComponent,
        PreviewPdfComponent,
        LogoutComponent,
        FormInputsComponent,
        FormLayoutsComponent,
        PurchaseOrderComponent,
        PurchaseRequisitionComponent,
        WeatherStationComponent,
        TemperatureComponent,
        AirQualityComponent,
        OpdEyeComponent,
        PracticeFieldComponent,
    ],
    imports: [
        BrowserModule,
        StoreModule.forRoot({auth: authReducer, ui: uiReducer}),
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        FormsModule,
        NgSelect2Module,
        ToastrModule.forRoot({
            timeOut: 3000,
            positionClass: 'toast-top-right',
            preventDuplicates: true
        }),
        NgbModule,
        ChartsModule,
        PdfViewerModule
    ],
    providers: [
        {
            provide: HTTP_INTERCEPTORS,
            useClass: InterceptorInterceptor,
            multi: true
        }
    ],
    bootstrap: [AppComponent]
})
export class AppModule {}
