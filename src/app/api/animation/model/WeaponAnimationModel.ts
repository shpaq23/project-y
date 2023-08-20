import { AnimatedSprite, Sprite } from 'pixi.js';
import { Animation } from './Animation';
import { AnimationDirection } from './AnimationDirection';

export type WeaponAnimationDirectionModel = {
	animation: { [key in keyof typeof AnimationDirection]: AnimatedSprite },
	idle: { [key in keyof typeof AnimationDirection]: Sprite }
};
export type WeaponAnimationBodyModel = { [key in keyof typeof Animation]: WeaponAnimationDirectionModel };

export type WeaponAnimationModel = {
	universal?: {
		normal: WeaponAnimationBodyModel;
		behind?: WeaponAnimationBodyModel;
	};

	walk?: {
		normal: WeaponAnimationDirectionModel;
		behind?: WeaponAnimationDirectionModel;
	}

	slash?: {
		normal: WeaponAnimationDirectionModel;
		behind?: WeaponAnimationDirectionModel;
	}

	thrust?: {
		normal: WeaponAnimationDirectionModel;
		behind?: WeaponAnimationDirectionModel;
	}
}
