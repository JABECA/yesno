import { Component } from '@angular/core';
import { filter, map, pluck } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: [ './app.component.css' ],
})
export class AppComponent {}
