import { getLpcBodyDictionary } from './LPCBodyDictionary';
import { getLpcEarsDictionary } from './LPCEarsDictionary';
import { getLpcHeadDictionary } from './LPCHeadDictionary';

export class LPCDictionary {

	public static readonly ears = getLpcEarsDictionary();
	public static readonly body = getLpcBodyDictionary();
	public static readonly head = getLpcHeadDictionary();

}
