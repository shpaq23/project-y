import { LPCGender, LPCEyes } from '../enums';

export type LPCEyesDictionary = {
  [gender in keyof typeof LPCGender]: {
    [eye in Exclude<keyof typeof LPCEyes, 'default'>]: string;
  };
};

export function getLpcEyesDictionary(): LPCEyesDictionary {
  return Object.values(LPCGender).reduce((acc, gender) => {
    (acc[gender] as { [eyes in keyof typeof LPCEyes]: string }) = Object.values(
      LPCEyes
    ).reduce((acc, eye) => {
      if (eye === LPCEyes.default) {
        return acc;
      }
      (acc[eye] as string) = 'assets/lpc/eyes/' + gender + '/' + eye + '.png';
      return acc;
    }, {} as { [eyes in keyof typeof LPCEyes]: string });
    return acc;
  }, {} as LPCEyesDictionary);
}
