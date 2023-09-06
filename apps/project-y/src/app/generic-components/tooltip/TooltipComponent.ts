import { ChangeDetectionStrategy, Component, Input, Type } from '@angular/core';
import { RichText } from '../rich-text/RichText';
import { RichTextComponent } from '../rich-text/RichTextComponent';

@Component({
	selector: 'tooltip-container',
	templateUrl: './TooltipComponent.html',
	styleUrls: ['./TooltipComponent.scss'],
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		RichTextComponent
	]
})
export class TooltipComponent {

	@Input({ required: true })
	richText!: RichText;
}
