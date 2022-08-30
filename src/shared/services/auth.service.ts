import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { BehaviorSubject } from "rxjs";
import { HttpService } from "./http.service";
import { LocalTaskerService } from "./local-tasker.service";

@Injectable({providedIn: 'root'})
export class AuthService {

  constructor(private localTaskerService: LocalTaskerService, private http: HttpService, private router: Router){
    this._userSubject = new BehaviorSubject<any>(null);
    if (localStorage.getItem('tasker-logged')){
       this.loginLocaly();
       this._autologin.next(true)
    }
  }

  public loggedLocaly = false;

  get isAuthenticated(){
    return this._userSubject.value !== null;
  }

  get autoLoginAvailable(){
    return this._autologin.asObservable();
  }

  get user() { return this._userSubject.value }
  set user(value: any) { this._userSubject.next(value)}

  public loginLocaly(){
    localStorage.setItem('tasker-logged', 'true')
    if(localStorage.getItem('tasker-user')){
      this.user = JSON.parse(localStorage.getItem('tasker-user') || '')
    }else{
      return this.user = this.localTaskerService.user;
    }
    this.loggedLocaly = true;
    return this.router.navigateByUrl('');

  }

  public login(){
    return this.http.get<any>('https://jsonplaceholder.typicode.com/todos/1')
  }

  private _autologin = new BehaviorSubject<any>(false);
  private _userSubject: BehaviorSubject<any>;
}
