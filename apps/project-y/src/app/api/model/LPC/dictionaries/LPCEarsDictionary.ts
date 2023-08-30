import { LPCBodyColor, LPCEars } from '../enums';

export type LPCEarsDictionary = {
  [ear in Exclude<LPCEars, 'default'>]: {
    [color in LPCBodyColor]: string;
  };
};

export function getLpcEarsDictionary(): LPCEarsDictionary {
  const basePath = 'assets/lpc/head/ears';
  return Object.values(LPCEars).reduce((acc, ear) => {
    if (ear === LPCEars.default) {
      return acc;
    }
    acc[ear] = Object.values(LPCBodyColor).reduce((acc, color) => {
      acc[color] = basePath + '/' + ear + '/' + color + '.png';
      return acc;
    }, {} as { [color in LPCBodyColor]: string });
    return acc;
  }, {} as LPCEarsDictionary);
}
