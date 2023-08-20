import { Application } from 'pixi.js';
import { BodyAnimationModel } from '../model/BodyAnimationModel';
import { WeaponAnimationModel } from '../model/WeaponAnimationModel';
import { BodyModelController } from './BodyModelController';
import { WeaponModelController } from './WeaponModelController';

export class CharacterModelController {

	private readonly bodyController: BodyModelController = new BodyModelController(this.application, this.body);
	private readonly weaponController: WeaponModelController | undefined = this.weapon
		? new WeaponModelController(this.application, this.weapon)
		: undefined;

	constructor(
		private readonly application: Application,
		private readonly body: BodyAnimationModel,
		private readonly weapon?: WeaponAnimationModel
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