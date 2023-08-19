import { PixiAnimation } from './PixiAnimation';
import { PixiAnimationDirection } from './PixiAnimationDirection';

export interface CharacterWeaponAnimation {

	 universal?: {
		 normal: PixiAnimation;
		 behind?: PixiAnimation;
	},

	 walk?: {
		 normal: PixiAnimationDirection;
		 behind?: PixiAnimationDirection;
	}

	 slash?: {
		 normal: PixiAnimationDirection;
		 behind?: PixiAnimationDirection
	}

	 thrust?: {
		 normal: PixiAnimationDirection;
		 behind?: PixiAnimationDirection;
	}

}
