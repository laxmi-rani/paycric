import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { userService } from '../app/services/users.service';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AccountPage } from '../pages/account/account';
import { TransactionPage } from '../pages/transaction/transaction';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { RegisterPage } from '../pages/register/register';
import { MenuPage } from '../pages/menu/menu';
import { MainPage } from '../pages/main/main';
import { Facebook }  from "@ionic-native/facebook";
import { GooglePlus } from "@ionic-native/google-plus";
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Stripe } from '@ionic-native/stripe';
import { CardPage } from '../pages/card/card';

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
    MenuPage,
    AccountPage,
    TransactionPage,
    CardPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp), FormsModule, ReactiveFormsModule, HttpClientModule
    // AngularFireModule.initializeApp(firebaseConfig)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    RegisterPage,
    MainPage,
    MenuPage,
    AccountPage,
    TransactionPage,
    CardPage
  ],
  providers: [
    StatusBar,
     Facebook,
     GooglePlus,
    SplashScreen,
    userService, Stripe,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
