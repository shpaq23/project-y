import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { SelectorComponent } from '../generic-components/selector/SelectorComponent';

import { AppRootComponent } from './AppRootComponent';
import { ModelViewerComponent } from '../generic-components/model-viewer/ModelViewerComponent';
import { CharacterCreationComponent } from './character-creation/CharacterCreationComponent';
import { ButtonComponent } from '../generic-components/button/ButtonComponent';
import { CommonModule } from '@angular/common';

@NgModule({
	imports: [
		BrowserModule,
		FontAwesomeModule,
		ModelViewerComponent,
		RouterOutlet,
		ButtonComponent,
		CommonModule,
		SelectorComponent
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
