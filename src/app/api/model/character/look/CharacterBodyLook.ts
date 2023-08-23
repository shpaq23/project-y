import { LPCBodyColor } from '../../LPC/LPCBodyColor';
import { LPCGender } from '../../LPC/LPCGender';
import { LPCHair } from '../../LPC/LPCHair';
import { LPCHairColor } from '../../LPC/LPCHairColor';

export class CharacterBodyLook {


	constructor(
		private readonly gender: LPCGender,
		private readonly bodyColor: LPCBodyColor,
		private readonly hair: LPCHair,
		private readonly hairColor: LPCHairColor,
		private readonly
	) {
	}

}
