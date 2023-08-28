import { LPCGender } from '../../LPC/enums/body/LPCGender';
import { LPCWeaponStrings } from '../../LPC/enums/equipment/weapon/LPCWeaponStrings';
import { CharacterBodyLook } from './CharacterBodyLook';
import { CharacterEquipmentLook } from './CharacterEquipmentLook';

export class CharacterLook {

	constructor(
		private readonly gender: LPCGender,
		private readonly body: CharacterBodyLook,
		private readonly equipment: CharacterEquipmentLook
	) {
	}

	getBody(): string {
		return this.body.getCharacterBody(this.gender);
	}

	getHead(): string {
		return this.body.getHead(this.gender);
	}

	getEars(): string | undefined {
		return this.body.getEars();
	}
	
	getEyes(): string | undefined {
		return this.body.getEyes(this.gender);
	}
	 
	getNose(): string | undefined {
		return this.body.getNose();
	}

	getHair(): string | undefined {
		return this.body.getHair(this.gender);
	}

	getWeapon(): LPCWeaponStrings {
		return this.equipment.getWeapon(this.gender);
	}

	getQuiver(): string | undefined {
		return this.equipment.getQuiver()
	}

	getArrow(): string | undefined {
		return this.equipment.getArrow();
	}

}
