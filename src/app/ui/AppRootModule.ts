import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRootComponent } from './AppRootComponent';

@NgModule({
	imports: [
		BrowserModule,
		FontAwesomeModule
	],
	declarations: [
		AppRootComponent
	],
	providers: [],
	bootstrap: [AppRootComponent]
})
export class AppRootModule {
}
