import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AccountPage } from './account';
import { Stripe } from '@ionic-native/stripe';

@NgModule({
  declarations: [
    AccountPage,
  ],
  imports: [
    IonicPageModule.forChild(AccountPage),
  ],
})
export class AccountPageModule {
  constructor(private stripe: Stripe) {
    this.stripe.setPublishableKey('my_publishable_key');

    let card = {
     number: '4242424242424242',
     expMonth: 12,
     expYear: 2020,
     cvc: '220'
    };
    
    this.stripe.createCardToken(card)
       .then(token => console.log(token.id))
       .catch(error => console.error(error));
    }
   }
 
