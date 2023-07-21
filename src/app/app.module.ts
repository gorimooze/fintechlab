import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginFormComponent} from './pages/login/components/login-form/login-form.component';
import {LoginComponent} from "./pages/login/login.component";
import {AdminComponent} from "./pages/admin/admin.component";
import {ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatInputModule} from "@angular/material/input";
import {MatButtonModule} from "@angular/material/button";
import {NgOptimizedImage} from "@angular/common";
import {HttpClientModule} from '@angular/common/http';
import {SidebarComponent} from './pages/admin/sidebar/sidebar.component';
import {ReactionStatisticsComponent} from './pages/admin/components/reaction-statistics/reaction-statistics.component';
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {StoreModule} from "@ngrx/store";
import {authReducer} from "./shared/states/auth.reducer";
import {MeetingsCardComponent} from './pages/admin/components/meetings-card/meetings-card.component';
import {ProgressbarComponent} from './pages/admin/components/progressbar/progressbar.component';
import {MatProgressBarModule} from "@angular/material/progress-bar";
import {ChartComponent} from './pages/admin/components/chart/chart.component';
import {ProfileReactionsService} from "./pages/admin/services/profile-reactions.service";
import {AuthGuard} from "./shared/guards/auth.guard";
import {AuthService} from "./shared/services/auth.service";
import {AppEffects} from "./app.effects";
import {AuthEffects} from "./shared/states/auth.effects";
import {EffectsModule} from "@ngrx/effects";

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminComponent,
    LoginFormComponent,
    SidebarComponent,
    ReactionStatisticsComponent,
    MeetingsCardComponent,
    ProgressbarComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    NgOptimizedImage,
    HttpClientModule,
    MatCardModule,
    MatIconModule,
    EffectsModule.forRoot([AppEffects, AuthEffects]),
    StoreModule.forRoot({auth: authReducer}),
    MatProgressBarModule
  ],
  providers: [AuthService, ProfileReactionsService, AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule {
}
