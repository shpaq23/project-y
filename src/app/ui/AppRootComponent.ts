import { ChangeDetectionStrategy, Component } from '@angular/core';
import { faAppleWhole } from '@fortawesome/free-solid-svg-icons';
import { CharacterModelController } from '../api/animation/controllers/CharacterModelController';
import { CharacterBodyLook } from '../api/model/character/look/CharacterBodyLook';
import { CharacterEquipmentLook } from '../api/model/character/look/CharacterEquipmentLook';
import { CharacterLook } from '../api/model/character/look/CharacterLook';
import { getLpcEarsDictionary } from '../api/model/LPC/dictionaries/LPCEarsDictionary';
import { LPCBodyColor } from '../api/model/LPC/enums/LPCBodyColor';
import { LPCEars } from '../api/model/LPC/enums/LPCEars';
import { LPCGender } from '../api/model/LPC/enums/LPCGender';

@Component({
	selector: 'app-root',
	templateUrl: './AppRootComponent.html',
	styleUrls: ['./AppRootComponent.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppRootComponent {
	title = 'project-y';
	faCoffee = faAppleWhole;

	readonly characterBody: CharacterBodyLook = new CharacterBodyLook(
		LPCGender.male,
		LPCBodyColor.zombie_green,
		LPCEars.default
	);

	readonly characterLook = new CharacterLook(this.characterBody, new CharacterEquipmentLook());


	private modelController!: CharacterModelController;

	constructor() {
		console.log(getLpcEarsDictionary());
	}

	modelInitialized(controller: CharacterModelController): void {
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
