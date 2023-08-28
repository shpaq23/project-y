import { 
	LPCNose,
	LPCHair,
	LPCHairColor,
	LPCBeard,
	LPCEyes,
	LPCEars,
	LPCBodyColor,
	LPCGender 
 } from '../../LPC/enums'
import { LPCDictionary } from '../../LPC/dictionaries/LPCDictionary';
export class CharacterBodyLook {


	constructor(
		private readonly bodyColor: LPCBodyColor,
		private readonly ears: LPCEars,
		private readonly eyes: LPCEyes,
		private readonly hairColor: LPCHairColor,
		private readonly hair: LPCHair,
		private readonly nose: LPCNose,
		private readonly beard?: LPCBeard
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

	getEyes(gender: LPCGender): string | undefined {
		if(this.eyes === LPCEyes.default) {
			return undefined;
		}

		return LPCDictionary.eyes[gender][this.eyes];
	}

	getNose(): string | undefined {
		if(this.nose === LPCNose.default) {
			return undefined;
		}

		return LPCDictionary.nose[this.nose][this.bodyColor];
	}

	getHair(gender : LPCGender): string | undefined { 
		if(this.hair === LPCHair.none) {
			return undefined;
		}

		return LPCDictionary.hair[gender][this.hair][this.hairColor];
	}

}
