import { lpcWeaponDictionary } from './equipment/LPCWeaponDictionary';
import { getLpcBodyDictionary } from './LPCBodyDictionary';
import { getLpcEarsDictionary } from './LPCEarsDictionary';
import { getLpcHeadDictionary } from './LPCHeadDictionary';

export class LPCDictionary {

	public static readonly ears = getLpcEarsDictionary();
	public static readonly body = getLpcBodyDictionary();
	public static readonly head = getLpcHeadDictionary();
	public static readonly weapon = lpcWeaponDictionary;
	public static readonly quiver = 'assets/quiver/quiver.png';
	public static readonly arrow = 'assets/weapon/ranged/bow/arrow/arrow.png';

}
