import { Application } from 'pixi.js';
import { BodyAnimationModel } from '../model/BodyAnimationModel';
import { WeaponAnimationModel } from '../model/WeaponAnimationModel';
import { BodyModelController } from './BodyModelController';
import { WeaponModelController } from './WeaponModelController';

export class CharacterModelController {
  private readonly bodyController: BodyModelController =
    new BodyModelController(this.application, this.body);
  private readonly weaponController: WeaponModelController | undefined = this
    .weapon
    ? new WeaponModelController(this.application, this.weapon)
    : undefined;

  constructor(
    private readonly application: Application,
    private readonly body: BodyAnimationModel,
    private readonly weapon?: WeaponAnimationModel
  ) {}

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

  thrustLeft(): void {
    this.bodyController.thrustLeft();
    this.weaponController?.thrustLeft();
  }

  thrustRight(): void {
    this.bodyController.thrustRight();
    this.weaponController?.thrustRight();
  }

  thrustUp(): void {
    this.bodyController.thrustUp();
    this.weaponController?.thrustUp();
  }

  thrustDown(): void {
    this.bodyController.thrustDown();
    this.weaponController?.thrustDown();
  }

  castLeft(): void {
    this.bodyController.castLeft();
    this.weaponController?.castLeft();
  }

  castRight(): void {
    this.bodyController.castRight();
    this.weaponController?.castRight();
  }

  castUp(): void {
    this.bodyController.castUp();
    this.weaponController?.castUp();
  }

  castDown(): void {
    this.bodyController.castDown();
    this.weaponController?.castDown();
  }

  shootLeft(): void {
    this.bodyController.shootLeft();
    this.weaponController?.shootLeft();
  }

  shootRight(): void {
    this.bodyController.shootRight();
    this.weaponController?.shootRight();
  }

  shootUp(): void {
    this.bodyController.shootUp();
    this.weaponController?.shootUp();
  }

  shootDown(): void {
    this.bodyController.shootDown();
    this.weaponController?.shootDown();
  }

  death(): void {
    this.bodyController.death();
    this.weaponController?.death();
  }
}
