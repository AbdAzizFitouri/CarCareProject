import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class client {
  constructor(public email: string, public pass: string){ }
}


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  public clientId = 'newClient';
  public redirectUri = 'http://localhost:7999/';

  constructor(private _http: HttpClient) { }

  retrieveToken(code){
    let params = new URLSearchParams();
    params.append('grant_type','authorization_code');
    params.append('client_id',this.clientId);
    params.append('client_secret', 'newClientSecret');
    params.append('redirect_uri', this.redirectUri);
    params.append('code',code);

    let headers = 
      new HttpHeaders({'Content-type': 'application/x-www-form-urlencoded; charset=utf-8', 
      'Authorization': 'Basic '+btoa(this.clientId+":secret")});

      this._http.post('http://localhost:8083/auth/realms/baeldung/protocol/openid-connect/token', 
        params.toString(), { headers: headers })
        .subscribe(
          data => this.saveToken(data),
          err => alert('Invalid Credentials')); 
  }

  saveToken(token) {
    var expireDate = new Date().getTime() + (1000 * token.expires_in);
    //Cookie.set("access_token", token.access_token, expireDate);
    console.log('Obtained Access token');
  }

}
