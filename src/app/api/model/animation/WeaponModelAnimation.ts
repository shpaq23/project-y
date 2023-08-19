import { BasicModelSimpleAnimation, BasicModelSimpleAnimationDirection } from './BasicModelSimpleAnimation';

export type WeaponModelAnimation = {
	universal?: {
		normal: BasicModelSimpleAnimation;
		behind?: BasicModelSimpleAnimation;
	};

	walk?: {
		normal: BasicModelSimpleAnimationDirection;
		behind?: BasicModelSimpleAnimationDirection;
	}

	slash?: {
		normal: BasicModelSimpleAnimationDirection;
		behind?: BasicModelSimpleAnimationDirection;
	}

	thrust?: {
		normal: BasicModelSimpleAnimationDirection;
		behind?: BasicModelSimpleAnimationDirection;
	}
}
