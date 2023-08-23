import { LPCDictionary } from '../../LPC/dictionaries/LPCDictionary';
import { LPCBodyColor } from '../../LPC/enums/LPCBodyColor';
import { LPCEars } from '../../LPC/enums/LPCEars';
import { LPCGender } from '../../LPC/enums/LPCGender';

export class CharacterBodyLook {


	constructor(
		private readonly gender: LPCGender,
		private readonly bodyColor: LPCBodyColor,
		private readonly ears: LPCEars
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
