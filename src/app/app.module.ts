import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { HideNumberPipe } from './hide-number.pipe';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { ExternoComponent } from './externo/externo.component';

@NgModule({
	declarations: [ AppComponent, HideNumberPipe, HideNumberPipe,
    ExternoComponent
],
	imports: [ BrowserModule, HttpClientModule ],
	providers: [],
	bootstrap: [ AppComponent ],
})
export class AppModule {}
