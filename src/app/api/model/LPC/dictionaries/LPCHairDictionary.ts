import { LPCHairColor, LPCHair, LPCGender } from '../enums';

export type LPCHairDictionary = {
	[gender in LPCGender]: {
		[hair in Exclude<LPCHair, 'none'>]: {
            [color in LPCHairColor]: string
        }
	}
};


export function getLpcHairDictionary(): LPCHairDictionary {
    return Object.values(LPCGender).reduce((acc, gender) => {
        acc[gender] = Object.values(LPCHair).reduce((acc, hair) => {
            if (hair === LPCHair.none) {
                return acc;
            }

            acc[hair] = Object.values(LPCHairColor).reduce((acc, color) => {
                acc[color] = '';
                return acc;
            }, {} as { [color in LPCHairColor]: string });

            return acc;
        }, {} as { [hair in LPCHair]: { [color in LPCHairColor]: string } });

        return acc;
    }, {} as LPCHairDictionary) ;
} 
