import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';

@Injectable({
	providedIn: 'root',
})
export class PeticionesServiceService {
	public url: string;

	public yes: string;

	constructor(public _http: HttpClient) {
		this.url = 'https://yesno.wtf/api';
		this.yes = 'https://media.giphy.com/media/L9kwXOK00OJGM/giphy.gif';
	}

	getUser(): Observable<any> {
		return this._http.get(this.url);
	}
	getyes(): Observable<any> {
		return this._http.get(this.yes);
	}
}
