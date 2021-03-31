import { Component, OnInit } from '@angular/core';
import "@codetrix-studio/capacitor-google-auth";
import { Plugins } from '@capacitor/core';


@Component({
  selector: 'app-login-google',
  templateUrl: './login-google.component.html',
  styleUrls: ['./login-google.component.scss'],
})
export class LoginGoogleComponent implements OnInit {
    userInfo = null;
  constructor() { }

  ngOnInit() {}

  async googleSignup() {
    const googleUser = await Plugins.GoogleAuth.signIn() as any;
    console.log('my user: ', googleUser);
    this.userInfo = googleUser;
  }

}
