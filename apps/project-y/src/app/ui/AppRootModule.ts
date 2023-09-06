import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ComponentOutletComponent } from '../generic-components/outlet/ComponentOutletComponent';
import { ComponentOutletService } from '../generic-components/outlet/ComponentOutletService';
import { RichTextComponent } from '../generic-components/rich-text/RichTextComponent';
import { RichTextPipe } from '../generic-components/rich-text/RichTextPipe';
import { SelectorComponent } from '../generic-components/selector/SelectorComponent';
import { TooltipComponent } from '../generic-components/tooltip/TooltipComponent';
import { AppRootComponent } from './AppRootComponent';
import { ModelViewerComponent } from '../generic-components/model-viewer/ModelViewerComponent';
import { CharacterCreationComponent } from './character-creation/CharacterCreationComponent';
import { ButtonComponent } from '../generic-components/button/ButtonComponent';
import { CommonModule } from '@angular/common';
import { TooltipDirective } from '../generic-components/tooltip/TooltipDirective';

@NgModule({
	imports: [
		BrowserModule,
		FontAwesomeModule,
		ModelViewerComponent,
		RouterOutlet,
		ButtonComponent,
		CommonModule,
		SelectorComponent,
		TooltipComponent,
		ComponentOutletComponent,
		TooltipDirective,
		RichTextComponent,
		RichTextPipe
	],
	declarations: [AppRootComponent, CharacterCreationComponent],
	bootstrap: [AppRootComponent]
})
export class AppRootModule {
}
