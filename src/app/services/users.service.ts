import { Injectable } from "@angular/core";
import { User } from "../model/user.model";
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";


@Injectable()
export class userService{
 
    constructor(private _http:HttpClient){
    }
    userList():Observable<User[]>{
        return this._http.get<User[]>("http://localhost:3000/users");
                           
    }
}
