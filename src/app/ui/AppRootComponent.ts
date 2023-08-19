import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faAppleWhole } from '@fortawesome/free-solid-svg-icons';
import { CharacterModel } from '../api/model/CharacterModel';

@Component({
	selector: 'app-root',
	templateUrl: './AppRootComponent.html',
	styleUrls: ['./AppRootComponent.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppRootComponent {
	title = 'project-y';
	faCoffee = faAppleWhole;


	private modelController!: CharacterModel;

	modelInitialized(controller: CharacterModel): void {
		this.modelController = controller;
	}


	moveLeft(): void {
		this.modelController.walkLeft();
	}

	moveRight(): void {
		this.modelController.walkRight();
	}

	moveUp() {
		this.modelController.walkUp();
	}

	moveDown() {
		this.modelController.walkDown();
	}

	slashLeft() {
		this.modelController.slashLeft();
	}

	slashRight() {
		this.modelController.slashRight();
	}

	slashUp() {
		this.modelController.slashUp();
	}

	slashDown() {
		this.modelController.slashDown();
	}
}
