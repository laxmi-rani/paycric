import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../app/model/user.model';
import { userService } from '../../app/services/users.service';


/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {
  public users:User[];
  constructor(public navCtrl: NavController, public navParams: NavParams, private _userService: userService) {
    
  }
  ionViewDidLoad() {
    this._userService.userList().subscribe(usersData => this.users = usersData);
  }

}
