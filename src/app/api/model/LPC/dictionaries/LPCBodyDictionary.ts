import { LPCBodyColor } from '../enums/LPCBodyColor';
import { LPCGender } from '../enums/LPCGender';

export type LPCBodyDictionary = {
	[gender in keyof typeof LPCGender]: {
		[color in keyof typeof LPCBodyColor]: string
	}
};

export function getLpcBodyDictionary(): LPCBodyDictionary {
	return Object.values(LPCGender).reduce((acc, gender) => {
		(acc[gender] as { [color in keyof typeof LPCBodyColor]: string }) = Object.values(LPCBodyColor).reduce((acc, color) => {
			(acc[color] as string) = 'assets/body/bodies/' + gender + '/universal/' + color + '.png';
			return acc;
		}, {} as { [color in keyof typeof LPCBodyColor]: string });
		return acc;
	}, {} as LPCBodyDictionary);
}
