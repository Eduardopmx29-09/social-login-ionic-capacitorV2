import { Component, OnInit } from '@angular/core';

import { Plugins, registerWebPlugin } from '@capacitor/core';

import { FacebookLoginResponse } from '@capacitor-community/facebook-login';

import { FacebookLogin } from '@capacitor-community/facebook-login';


registerWebPlugin(FacebookLogin);
@Component({
  selector: 'app-login-facebook',
  templateUrl: './login-facebook.component.html',
  styleUrls: ['./login-facebook.component.scss'],
})
export class LoginFacebookComponent implements OnInit {


  constructor() {

  }

  ngOnInit() {}

  async login (){
    const { FacebookLogin } = Plugins;
    const FACEBOOK_PERMISSIONS = ['email', 'user_birthday', 'user_photos', 'user_gender'];
      const result = await <FacebookLoginResponse>FacebookLogin.login({ permissions: FACEBOOK_PERMISSIONS });

if (result.accessToken) {
  // Login successful.
  console.log(`Facebook access token is ${result.accessToken.token}`);
} else {
  // Cancelled by user.
}
  }

  async Logout(){
    await FacebookLogin.logout();
  }

  async CurrentAccessToken(){
    const { FacebookLogin } = Plugins;
    const result = await <FacebookLoginResponse>FacebookLogin.getCurrentAccessToken();

if (result.accessToken) {
  console.log(`Facebook access token is ${result.accessToken.token}`);
} else {
  // Not logged in.
}
  }

  async getProfile (){

    const result = await FacebookLogin.getProfile<{
      email: string;
    }>({ fields: ['email'] });

  console.log(`Facebook user's email is ${result.email}`);
  }

}
