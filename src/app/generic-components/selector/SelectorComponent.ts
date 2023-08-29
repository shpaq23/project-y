import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
	selector: 'selector',
	templateUrl: './SelectorComponent.html',
	styleUrls: ['./SelectorComponent.scss'],
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SelectorComponent {

}
