import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/';

@Injectable({
	providedIn: 'root',
})
export class PeticionesServiceService {
	public url: string;

	constructor(public _http: HttpClient) {
		this.url = 'https://yesno.wtf/api';
	}

	getData(): Observable<any> {
		return this._http.get(this.url);
	}
}
