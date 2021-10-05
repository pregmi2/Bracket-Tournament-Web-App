import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';
import { tournament } from './tournament.model';
import { group } from './group.model';
import { JwtHelperService } from '@auth0/angular-jwt';
const POROTOCOL = 'http';
const PORT = 3000;

@Injectable()
export class RestDataSource {
  
  user: User;
  baseUrl: string;
  authToken!: string;

  private httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origion': '*',
      'Access-Control-Allow-Headers':
        'Origin, X-Requested-With, Content-Type, Accept',

        'X-Frame-Options': 'Deny',
        'X-XSS-Protection': '1',
        'X-Content-Type-Options': 'nosniff',
        'cache-control':'max-age=3153600'
    }),
  };

  constructor(private http: HttpClient, private jwtService: JwtHelperService) {
    this.user = new User();
    this.baseUrl = `${POROTOCOL}://${location.hostname}:${PORT}/api/`;
    //this.baseUrl = 'https://bracket-tournament.herokuapp.com/api/';
  }

  // ***************** User Section  ***************************
  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.baseUrl + 'users');
  }

  signup(user: User): Observable<User> {
    return this.http.post<User>(this.baseUrl + 'signup', user);
  }

  addUser(user: User): Observable<User> {
    this.loadToken();
    return this.http.post<User>(this.baseUrl + 'users/add', user,this.httpOptions);
  }

  updateUser(user: User): Observable<User> {
    this.loadToken();
    return this.http.post<User>(`${this.baseUrl}users/edit/${user._id}`, user,this.httpOptions);
  }

  deleteUser(id: Number): Observable<User> {
    this.loadToken();
    return this.http.get<User>(`${this.baseUrl}users/delete/${id}`,this.httpOptions);
  }

  //*********************End USER SECTION *************************** */

  // ************************group Section *************************

  getgroups(): Observable<group[]> {
    return this.http.get<group[]>(this.baseUrl + 'groups');
  }

  addgroup(group: group): Observable<User> {
    this.loadToken();
    return this.http.post<group>(this.baseUrl + 'groups/add', group,this.httpOptions);
  }

  updategroup(group: group): Observable<User> {
    this.loadToken();
    return this.http.post<group>(`${this.baseUrl}groups/edit/${group._id}`, group,this.httpOptions);
  }

  deletegroup(id: number): Observable<group> {
    this.loadToken();
    return this.http.get<group>(`${this.baseUrl}groups/delete/${id}`,this.httpOptions);
  }

  //*********************End group SECTION *************************** */

  // ************************ Authentication Section ******************** */
  storeUserData(token: any, user: User): void {
    localStorage.setItem('id_token', 'Bearer ' + token);
    localStorage.setItem('user', JSON.stringify(user));
    this.authToken = token;
    this.user = user;
  }

  authenticate(user: User): Observable<any> {
    return this.http.post<any>(this.baseUrl + 'login', user, this.httpOptions);
  }

  loggedIn(): boolean {
    return !this.jwtService.isTokenExpired(this.authToken);
  }

  logout(): Observable<any> {
    this.authToken = '';
    this.user = new User();
    localStorage.clear();

    return this.http.get<any>(this.baseUrl + 'logout', this.httpOptions);
  }

  private loadToken(): void {
    const token = localStorage.getItem('id_token') || '';
    this.authToken = token;
    this.httpOptions.headers = this.httpOptions.headers.set(
      'Authorization',
      this.authToken
    );
  }
  //*********************End Authentication SECTION *************************** */

  // ************************tournament Section *************************

  gettournaments(): Observable<tournament[]> {
    return this.http.get<tournament[]>(this.baseUrl + 'tournaments');
  }

  addtournaments(tournament: tournament): Observable<User> {
    this.loadToken();
    return this.http.post<tournament>(this.baseUrl + 'tournaments/add', tournament,this.httpOptions);
  }

  updatetournaments(tournament: tournament): Observable<User> {
    this.loadToken();
    return this.http.post<tournament>(`${this.baseUrl}tournaments/edit/${tournament._id}`, tournament,this.httpOptions);
  }

  deletetournaments(id: number): Observable<tournament> {
    this.loadToken();
    return this.http.get<tournament>(`${this.baseUrl}tournaments/delete/${id}`,this.httpOptions);
  }
  //*********************End Tournamentn SECTION *************************** */
  
}
