import { LPCBodyColor } from '../enums/body/LPCBodyColor';
import { LPCGender } from '../enums/body/LPCGender';

export type LPCHeadDictionary = {
	[gender in LPCGender]: {
		[color in LPCBodyColor]: string
	}
};

export function getLpcHeadDictionary(): LPCHeadDictionary {
	return Object.values(LPCGender).reduce((acc, gender) => {
		acc[gender] = Object.values(LPCBodyColor).reduce((acc, color) => {
			acc[color] = 'assets/head/heads/' + 'human_' + gender + '/universal/' + color + '.png';
			return acc;
		}, {} as { [color in LPCBodyColor]: string });
		return acc;
	}, {} as LPCHeadDictionary);
}
