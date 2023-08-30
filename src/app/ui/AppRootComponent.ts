import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CharacterModelController } from '../api/animation/controllers/CharacterModelController';
import { CharacterBodyLook } from '../api/model/character/look/CharacterBodyLook';
import { CharacterEquipmentLook } from '../api/model/character/look/CharacterEquipmentLook';
import { CharacterLook } from '../api/model/character/look/CharacterLook';
import { getLpcEarsDictionary } from '../api/model/LPC/dictionaries/LPCEarsDictionary';
import {
	LPCBodyColor,
	LPCEars,
	LPCGender,
	LPCEyes,
	LPCHair,
	LPCHairColor,
	LPCNose,
	LPCPolearm,
	LPCSword,
	LPCMagic,
	LPCRanged,
	LPCBlunt, LPCWeapon
} from '../api/model/LPC/enums';

@Component({
	selector: 'app-root',
	templateUrl: './AppRootComponent.html',
	styleUrls: ['./AppRootComponent.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppRootComponent {
	title = 'project-y';


	readonly weapons = Object.values(LPCSword);

	private selectedSword: LPCSword | undefined;

	readonly characterBody: CharacterBodyLook = new CharacterBodyLook(
		LPCBodyColor.zombie_green,
		LPCEars.default,
		LPCEyes.orange,
		LPCHairColor.black,
		LPCHair.afro,
		LPCNose.big
	);

	readonly characterLook = new CharacterLook(
		LPCGender.male,
		this.characterBody,
		new CharacterEquipmentLook(
			LPCRanged.recurve_bow
		)
	);

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

	shootLeft() {
		this.modelController.shootLeft();
	}

	shootRight() {
		this.modelController.shootRight();
	}

	shootUp() {
		this.modelController.shootUp();
	}

	shootDown() {
		this.modelController.shootDown();
	}

	thrustLeft() {
		this.modelController.thrustLeft();
	}

	thrustRight() {
		this.modelController.thrustRight();
	}

	thrustUp() {
		this.modelController.thrustUp();
	}

	thrustDown() {
		this.modelController.thrustDown();
	}

	castLeft() {
		this.modelController.castLeft();
	}

	castRight() {
		this.modelController.castRight();
	}

	castUp() {
		this.modelController.castUp();
	}

	castDown() {
		this.modelController.castDown();
	}

	onSelectChange(event: string): void {
		this.selectedSword = event as LPCSword;
		console.log(this.selectedSword);
	}

}
