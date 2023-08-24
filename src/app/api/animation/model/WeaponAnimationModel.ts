import { AnimatedSprite, Sprite } from 'pixi.js';
import { Animation } from './Animation';
import { AnimationDirection } from './AnimationDirection';

export type WeaponAnimationDirectionModel = {
	animation: { [key in AnimationDirection]: AnimatedSprite },
	idle: { [key in AnimationDirection]: Sprite }
};
export type WeaponAnimationBodyModel = { [key in Animation]: WeaponAnimationDirectionModel };

export type WeaponAnimationModel = {
	universal?: {
		normal: WeaponAnimationBodyModel;
		behind?: WeaponAnimationBodyModel;
	}
} & {
	[key in Animation]?: {
		normal: WeaponAnimationDirectionModel;
		behind?: WeaponAnimationDirectionModel;
	};
};
