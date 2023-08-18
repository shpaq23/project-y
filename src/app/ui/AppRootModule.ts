import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRootComponent } from './AppRootComponent';
import { ModelViewerComponent } from './model-viewer/ModelViewerComponent';

@NgModule({
	imports: [
		BrowserModule,
		FontAwesomeModule,
		ModelViewerComponent,
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
