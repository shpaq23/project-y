import { LPCBodyColor, LPCGender } from '../enums';

export type LPCHeadDictionary = {
	[gender in LPCGender]: {
		[color in LPCBodyColor]: string
	}
};

export function getLpcHeadDictionary(): LPCHeadDictionary {
	return Object.values(LPCGender).reduce((acc, gender) => {
		acc[gender] = Object.values(LPCBodyColor).reduce((acc, color) => {
			acc[color] = 'assets/lpc/head/heads/' + 'human_' + gender + '/universal/' + color + '.png';
			return acc;
		}, {} as { [color in LPCBodyColor]: string });
		return acc;
	}, {} as LPCHeadDictionary);
}
