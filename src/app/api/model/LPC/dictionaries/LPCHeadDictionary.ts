import { LPCBodyColor } from '../enums/LPCBodyColor';
import { LPCGender } from '../enums/LPCGender';

export type LPCHeadDictionary = {
	[gender in keyof typeof LPCGender]: {
		[color in keyof typeof LPCBodyColor]: string
	}
};

export function getLpcHeadDictionary(): LPCHeadDictionary {
	return Object.values(LPCGender).reduce((acc, gender) => {
		(acc[gender] as { [color in keyof typeof LPCBodyColor]: string }) = Object.values(LPCBodyColor).reduce((acc, color) => {
			(acc[color] as string) = 'assets/head/heads/' + 'human_' + gender + '/universal/' + color + '.png';
			return acc;
		}, {} as { [color in keyof typeof LPCBodyColor]: string });
		return acc;
	}, {} as LPCHeadDictionary);
}
