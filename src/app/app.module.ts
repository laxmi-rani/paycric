import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { MenuPage } from '../pages/menu/menu';
import { MainPage } from '../pages/main/main';
 import { Facebook }  from "@ionic-native/facebook";
 import { GooglePlus } from "@ionic-native/google-plus";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

// export const firebaseConfig = {
//     apiKey: "AIzaSyD0xZHOedjw2USVPfOlZ6Wp6x-J6Pmt7m0",
//     authDomain: "paycrik-e28fc.firebaseapp.com",
//     databaseURL: "https://paycrik-e28fc.firebaseio.com",
//     projectId: "paycrik-e28fc",
//     storageBucket: "paycrik-e28fc.appspot.com",
//     messagingSenderId: "51248339906"
// }

// firebase.initializeApp(firebaseConfig);
@NgModule({
  declarations: [
    MyApp,
    LoginPage,
    RegisterPage,
    MainPage,
    MenuPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp), FormsModule, ReactiveFormsModule,
    // AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    MainPage,
    MenuPage
  ],
  providers: [
    StatusBar,
     Facebook,
     GooglePlus,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
