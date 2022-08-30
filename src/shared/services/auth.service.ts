import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { HttpService } from "./http.service";
import { LocalTaskerService } from "./local-tasker.service";

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private localTaskerService: LocalTaskerService, private http: HttpService){
    this._userSubject = new BehaviorSubject<any>(null);
  }

  get isAuthenticated(){
    return this._userSubject.value !== null;
  }

  get autoLoginAvailable(){
    return this._autologin.asObservable();
  }

  get user() { return this._userSubject.value }
  set user(value: any) { this._userSubject.next(value)}

  public loginLocaly(){
    if(localStorage.getItem('tasker-user')){
      return JSON.parse(localStorage.getItem('tasker-user') || '')
    }
    return this.localTaskerService.user;
  }

  public login(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos/1')
  }

  private _autologin = new BehaviorSubject<any>(false);

  private _userSubject: BehaviorSubject<any>;
}
