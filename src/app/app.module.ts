import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { TabsLoginSignupPage } from '../pages/tabs-login-signup/tabs-login-signup';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/sign-up/sign-up';
import { BasicPage } from '../pages/basic/basic';
import { MainPage } from '../pages/main/main';
import { ShopPage } from '../pages/shop/shop';
import { NoticePage } from '../pages/notice/notice';
import { PersonPage } from '../pages/person/person';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    TabsLoginSignupPage,
    LoginPage,
    SignUpPage,
    BasicPage,
    MainPage,
    ShopPage,
    NoticePage,
    PersonPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsLoginSignupPage,
    LoginPage,
    SignUpPage,
    BasicPage,
    MainPage,
    ShopPage,
    NoticePage,
    PersonPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
