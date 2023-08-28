import { LPCBodyColor, LPCNose } from "../enums";

export type LPCNoseDictionary = {
    [nose in Exclude<LPCNose, 'default'>]: {
            [color in LPCBodyColor]: string
        }

};


export function getLPCNoseDictionary(): LPCNoseDictionary {
    return Object.values(LPCNose).reduce((acc, nose) => {
        if (nose === LPCNose.default) {
            return acc;
        }

        acc[nose] = Object.values(LPCBodyColor).reduce((acc, color) => {
            acc[color] = 'assets/lpc/head/nose/' + nose + '/' + color + '.png';
            return acc;
        }, {} as { [color in LPCBodyColor]: string });

        return acc;
    }, {} as LPCNoseDictionary) ;
}