import { LPCNose } from '../../LPC/enums/body/LPCNose';
import { LPCHairColor } from '../../LPC/enums/body/LPCHairColor';
import { LPCBeard } from '../../LPC/enums/body/LPCBeard';
import { LPCDictionary } from '../../LPC/dictionaries/LPCDictionary';
import { LPCBodyColor } from '../../LPC/enums/body/LPCBodyColor';
import { LPCEars } from '../../LPC/enums/body/LPCEars';
import { LPCEyes } from '../../LPC/enums/body/LPCEyes';
import { LPCGender } from '../../LPC/enums/body/LPCGender';
import { LPCHair } from '../../LPC/enums/body/LPCHair';

export class CharacterBodyLook {


	constructor(
		private readonly bodyColor: LPCBodyColor,
		private readonly ears: LPCEars,
		private readonly eyes?: LPCEyes,
		private readonly nose?: LPCNose,
		private readonly beard?: LPCBeard,
		private readonly hairColor?: LPCHairColor,
		private readonly hair?: LPCHair
	) {
	}


	getCharacterBody(gender: LPCGender): string {
		return LPCDictionary.body[gender][this.bodyColor];
	}

	getHead(gender: LPCGender): string {
		return LPCDictionary.head[gender][this.bodyColor];
	}

	getEars(): string | undefined {
		if (this.ears === LPCEars.default) {
			return undefined;
		}

		return LPCDictionary.ears[this.ears][this.bodyColor];

	}

}
