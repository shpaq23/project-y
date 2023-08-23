import { LPCBodyColor } from '../enums/LPCBodyColor';
import { LPCEars } from '../enums/LPCEars';

export type LPCEarsDictionary = {
	[ear in Exclude<keyof typeof LPCEars, 'default'>]: {
		[color in keyof typeof LPCBodyColor]: string;
	};
};


export function getLpcEarsDictionary(): LPCEarsDictionary {
	const basePath = 'assets/head/ears';
	return Object.values(LPCEars).reduce((acc, ear) => {
		if (ear === LPCEars.default) {
			return acc;
		}
		(acc[ear] as { [color in keyof typeof LPCBodyColor]: string; }) = Object.values(LPCBodyColor).reduce((acc, color) => {
			(acc[color] as string) = basePath + '/' + ear + '/' + color + '.png';
			return acc;
		}, {} as { [color in keyof typeof LPCBodyColor]: string });
		return acc;
	}, {} as LPCEarsDictionary);
}
