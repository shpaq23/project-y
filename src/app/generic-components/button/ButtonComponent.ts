import { ChangeDetectionStrategy, Component, Directive } from '@angular/core';

@Directive({
	selector: 'button[btn]',
	templateUrl: './ButtonComponent.html',
	styleUrls: ['./ButtonComponent.scss'],
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonComponent {

}
