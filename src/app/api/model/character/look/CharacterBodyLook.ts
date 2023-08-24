import { LPCNose } from './../../LPC/enums/LPCNose';
import { LPCHairColor } from './../../LPC/enums/LPCHairColor';
import { LPCBeard } from './../../LPC/enums/LPCBeard';
import { LPCDictionary } from '../../LPC/dictionaries/LPCDictionary';
import { LPCBodyColor } from '../../LPC/enums/LPCBodyColor';
import { LPCEars } from '../../LPC/enums/LPCEars';
import { LPCEyes } from '../../LPC/enums/LPCEyes';
import { LPCGender } from '../../LPC/enums/LPCGender';
import { LPCHair } from '../../LPC/enums/LPCHair';

export class CharacterBodyLook {


	constructor(
		private readonly gender: LPCGender,
		private readonly bodyColor: LPCBodyColor,
		private readonly ears: LPCEars,
		private readonly eyes?: LPCEyes,
		private readonly nose?: LPCNose,
		private readonly beard?: LPCBeard,
		private readonly hairColor?: LPCHairColor,
		private readonly hair?: LPCHair
	) {
	}


	getCharacterBody(): string {
		return LPCDictionary.body[this.gender][this.bodyColor];
	}

	getHead(): string {
		return LPCDictionary.head[this.gender][this.bodyColor];
	}

	getEars(): string | undefined {
		if (this.ears === LPCEars.default) {
			return undefined;
		}

		return LPCDictionary.ears[this.ears][this.bodyColor];

	}

}
