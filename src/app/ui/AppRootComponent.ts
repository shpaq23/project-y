import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faAppleWhole } from '@fortawesome/free-solid-svg-icons';

@Component({
	selector: 'app-root',
	templateUrl: './AppRootComponent.html',
	styleUrls: ['./AppRootComponent.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppRootComponent {
	title = 'project-y';
	faCoffee = faAppleWhole;

}
