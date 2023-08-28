import { lpcWeaponDictionary } from './equipment/LPCWeaponDictionary';
import { getLpcBodyDictionary } from './LPCBodyDictionary';
import { getLpcEarsDictionary } from './LPCEarsDictionary';
import { getLpcHeadDictionary } from './LPCHeadDictionary';
import { getLpcEyesDictionary } from './LPCEyesDictionary';
import { getLpcHairDictionary } from './LPCHairDictionary';
import { getLPCNoseDictionary } from './LPCNoseDictionary';

export class LPCDictionary {

	public static readonly ears = getLpcEarsDictionary();
	public static readonly body = getLpcBodyDictionary();
	public static readonly head = getLpcHeadDictionary();
	public static readonly weapon = lpcWeaponDictionary;
	public static readonly quiver = 'assets/lpc/quiver/quiver.png';
	public static readonly arrow = 'assets/lpc/weapon/ranged/bow/arrow/arrow.png';
	public static readonly eyes = getLpcEyesDictionary();
	public static readonly nose = getLPCNoseDictionary();
	public static readonly hair = getLpcHairDictionary();
}
