import { ChangeDetectionStrategy, Component, Input } from '@angular/core';

@Component({
	selector: 'tooltip-container',
	templateUrl: './TooltipComponent.html',
	styleUrls: ['./TooltipComponent.scss'],
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: []
})
export class TooltipComponent {
	@Input() text: string = '';
}
