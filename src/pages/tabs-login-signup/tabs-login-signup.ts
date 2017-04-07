import { Component } from '@angular/core';

import { LoginPage } from '../login/login';
import { SignUpPage } from '../sign-up/sign-up';

@Component({
  templateUrl: 'tabs-login-signup.html'
})
export class TabsLoginSignupPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = LoginPage;
  tab2Root: any = SignUpPage;

  constructor() {

  }
}
