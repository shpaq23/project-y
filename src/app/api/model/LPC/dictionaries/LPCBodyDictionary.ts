import { LPCBodyColor, LPCGender } from '../enums';

export type LPCBodyDictionary = {
	[gender in LPCGender]: {
		[color in LPCBodyColor]: string
	}
};

export function getLpcBodyDictionary(): LPCBodyDictionary {
	return Object.values(LPCGender).reduce((acc, gender) => {
		acc[gender] = Object.values(LPCBodyColor).reduce((acc, color) => {
			acc[color] = 'assets/body/bodies/' + gender + '/universal/' + color + '.png';
			return acc;
		}, {} as { [color in LPCBodyColor]: string });
		return acc;
	}, {} as LPCBodyDictionary);
}
