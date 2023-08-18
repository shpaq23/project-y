import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faAppleWhole } from '@fortawesome/free-solid-svg-icons';
import { ModelController } from '../api/model/ModelController';

@Component({
	selector: 'app-root',
	templateUrl: './AppRootComponent.html',
	styleUrls: ['./AppRootComponent.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppRootComponent {
	title = 'project-y';
	faCoffee = faAppleWhole;


	private modelController!: ModelController;

	modelInitialized(controller: ModelController): void {
		this.modelController = controller;
	}


	moveLeft(): void {
		this.modelController.walkLeft().subscribe();
	}

	moveRight(): void {
		this.modelController.walkRight().subscribe();
	}

	moveUp() {
		this.modelController.walkUp().subscribe();
	}

	moveDown() {
		this.modelController.walkDown().subscribe();
	}

	slashLeft() {
		this.modelController.slashLeft().subscribe();
	}

	slashRight() {
		this.modelController.slashRight().subscribe();
	}

	slashUp() {
		this.modelController.slashUp().subscribe();
	}

	slashDown() {
		this.modelController.slashDown().subscribe();
	}
}
