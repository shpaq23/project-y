import { Application } from 'pixi.js';
import { CharacterBasicAnimation } from './CharacterBasicAnimation';
import { CharacterWeaponAnimation } from './CharacterWeaponAnimation';
import { ModelBodyController } from './ModelBodyController';
import { ModelWeaponController } from './ModelWeaponController';

export class CharacterModel {

	private readonly bodyController: ModelBodyController = new ModelBodyController(this.application, this.basic);
	private readonly weaponController: ModelWeaponController | undefined = this.weapon
		? new ModelWeaponController(this.application, this.weapon)
		: undefined;

	constructor(
		private readonly application: Application,
		private readonly basic: CharacterBasicAnimation,
		private readonly weapon?: CharacterWeaponAnimation
	) {
	}

	walkLeft(): void {
		this.bodyController.walkLeft();
		this.weaponController?.walkLeft();
	}

	walkRight(): void {
		this.bodyController.walkRight();
		this.weaponController?.walkRight();
	}

	walkUp(): void {
		this.bodyController.walkUp();
		this.weaponController?.walkUp();
	}

	walkDown(): void {
		this.bodyController.walkDown();
		this.weaponController?.walkDown();
	}

	slashLeft(): void {
		this.bodyController.slashLeft();
		this.weaponController?.slashLeft();
	}

	slashRight(): void {
		this.bodyController.slashRight();
		this.weaponController?.slashRight();
	}

	slashUp(): void {
		this.bodyController.slashUp();
		this.weaponController?.slashUp();
	}

	slashDown(): void {
		this.bodyController.slashDown();
		this.weaponController?.slashDown();
	}

}