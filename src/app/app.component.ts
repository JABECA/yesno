import { Component } from '@angular/core';
import { filter, map, pluck } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html',
	styleUrls: [ './app.component.css' ],
})
export class AppComponent {
	// title = 'app';
	// // url = 'https://jsonplaceholder.typicode.com/posts/1';
	// url = 'https://yesno.wtf/api';
	// posts$: Observable<any>;
	// constructor(public _http: HttpClient) {
	// 	this.posts$ = this._http
	// 		.get(this.url)
	// 		.pipe(filter((post) => post['id'] % 2 !== 0), pluck('answer'));
	// 	console.log(this.posts$);
	// }
}
