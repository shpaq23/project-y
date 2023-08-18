import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRootComponent } from './AppRootComponent';
import { PixiComponent } from './pixi/PixiComponent';

@NgModule({
	imports: [
		BrowserModule,
		FontAwesomeModule,
		PixiComponent,
		RouterOutlet
	],
	declarations: [
		AppRootComponent
	],
	providers: [],
	bootstrap: [AppRootComponent]
})
export class AppRootModule {
}
