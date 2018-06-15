import { AppComponent } from './app.component';
import { BrowserModule } from '@angular/platform-browser';
import { ExternoComponent } from './externo/externo.component';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

@NgModule({
	declarations: [ AppComponent, ExternoComponent ],
	imports: [ BrowserModule, HttpClientModule ],
	providers: [],
	bootstrap: [ AppComponent ],
})
export class AppModule {}
