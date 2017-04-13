import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

// Login and sign
import { TabsLoginSignupPage } from '../pages/tabs-login-signup/tabs-login-signup';
import { LoginPage } from '../pages/login/login';
import { SignUpPage } from '../pages/sign-up/sign-up';

// Tabs bottom
import { BasicPage } from '../pages/basic/basic';
import { MainPage } from '../pages/main/main';
import { ShopPage } from '../pages/shop/shop';
import { NoticePage } from '../pages/notice/notice';
import { PersonPage } from '../pages/person/person';

// PersonPage items page
import { PersonInformationPage } from '../pages/person/items/person-information/person-information'
import { CardRechargePage } from '../pages/person/items/card-recharge/card-recharge';
import { CardInformationPage } from '../pages/person/items/card-information/card-information';
import { GameHistoryPage } from '../pages/person/items/game-history/game-history';
import { GameRankPage } from '../pages/person/items/game-rank/game-rank';
import { SettingPage } from '../pages/person/items/setting/setting';
import { LoginSignupPage } from '../pages/person/items/login-signup/login-signup';



// CardInformation item: detail
import { CardDetailPage } from '../pages/person/items/card-information/card-detail/card-detail';
import { AddCardPage } from '../pages/person/items/card-information/add-card/add-card';
import { PointTransferPage } from '../pages/person/items/card-information/card-detail/point-transfer/point-transfer'

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

// rank
import { RankDetailPage } from '../pages/person/items/game-rank/rank-detail/rank-detail';

// game history
import { GameHistoryDetailPage } from '../pages/person/items/game-history/game-history-detail/game-history-detail';

// children page of person-detail page
import { ModifiedPersonInPage } from '../pages/person/items/person-information/modified-person-information/modified-person-information';

// children page of SettingPage
import { MultiLanguagePage } from '../pages/person/items/setting/multi-language/multi-language';
import { AboutPage } from '../pages/person/items/setting/about/about';

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
    PersonPage,
    PersonInformationPage,
    CardRechargePage,
    CardInformationPage,
    GameHistoryPage,
    GameRankPage,
    SettingPage,
    AboutPage,
    CardDetailPage,
    AddCardPage,
    PointTransferPage,
    RankDetailPage,
    GameHistoryDetailPage,
    ModifiedPersonInPage,
    MultiLanguagePage,
    LoginSignupPage
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
    PersonPage,
    PersonInformationPage,
    CardRechargePage,
    CardInformationPage,
    GameHistoryPage,
    GameRankPage,
    SettingPage,
    AboutPage,
    CardDetailPage,
    AddCardPage,
    PointTransferPage,
    RankDetailPage,
    GameHistoryDetailPage,
    ModifiedPersonInPage,
    MultiLanguagePage,
    LoginSignupPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
    // CardRechargePage
  ]
})
export class AppModule {}
