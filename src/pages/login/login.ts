 import { Facebook, FacebookLoginResponse }  from "@ionic-native/facebook";
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { RegisterPage } from '../register/register';
 import { MenuPage } from '../menu/menu';
 import { GooglePlus } from "@ionic-native/google-plus";
// import { AngularFireModule } from "angularfire2";
// import firebase from "firebase";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  userData = null;
  constructor(public navCtrl: NavController, public navParams: NavParams,private googlePlus :GooglePlus,private fb:Facebook){
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  register()
  {
    this.navCtrl.push(RegisterPage);
  }

  login()
  {
    this.navCtrl.setRoot(MenuPage); 
  }

  loginFb()
  {

    this.fb.login(['public_profile','user_friends','email']).then((res: FacebookLoginResponse)=>console.log('Logged into Facebook!',res))
    .catch(e=>console.log('Error logging into Facebook',e));
    // this.fb.login(['email','public_profile']).then((response:FacebookLoginResponse)=>{
    //   this.fb.api('me?fields=id,name,email,first_name,picture.width(720).as(picture_large)', []).then(profile => {
    //     this.userData = {email: profile['email'], first_name: profile['first_name'], picture: profile['picture_large']['data']['url'], username: profile['name']}
    //   console.log(this.userData);
    //   })
    // })
  }

  loginGoogle()
  {
  this.googlePlus.login({}).then(res=>console.log(res)).catch(err=>console.error(err));

    // this.googleplus.login({
    //   'webClientId':'51248339906-d50f8ctinp6d4uc25e3tk1cfl9jsd2s7.apps.googleusercontent.com',
    //   'offline':true
    // }).then(res => {
    //   firebase.auth().signInWithCredential(firebase.auth.GoogleAuthProvider.credential(res.idToken)).then(suc =>
    //      {
    //        alert("login suc")
    //     }).catch(ns => {
    //       alert("not suc");
    //     })
    // })
  }
}
