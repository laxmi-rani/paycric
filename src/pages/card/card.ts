import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Stripe } from '@ionic-native/stripe';

/**
 * Generated class for the CardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class CardPage {
  card:any = {
    number:"",
    expMonth: "",
    expYear: "",
    cvc: ""
  };
  constructor(public navCtrl: NavController, public navParams: NavParams, private _stripe: Stripe) {
  }
  pay():void{
    this._stripe.setPublishableKey("pk_test_n7CQiXMdHbWDd4mxCKrbQln0");
    this._stripe.createCardToken(this.card)
   .then(token => console.log(token.id))
   .catch(error => console.error(error));
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CardPage');
  }

}
