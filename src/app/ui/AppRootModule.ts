import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRootComponent } from './AppRootComponent';
import { ModelViewerComponent } from '../generic-components/model-viewer/ModelViewerComponent';
import { CharacterCreationComponent } from './character-creation/CharacterCreationComponent';

@NgModule({
	imports: [
		BrowserModule,
		FontAwesomeModule,
		ModelViewerComponent,
		RouterOutlet
	],
	declarations: [
		AppRootComponent,
		CharacterCreationComponent
	],
	providers: [],
	bootstrap: [AppRootComponent]
})
export class AppRootModule {
}
