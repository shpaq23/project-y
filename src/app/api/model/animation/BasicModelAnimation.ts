import { AnimatedSprite, Sprite } from 'pixi.js';
import { AnimationDirection } from './AnimationDirection';
import { Animation } from './Animation';

export type BasicModelAnimationDirection = {
	animation: { [key in keyof typeof AnimationDirection]: Array<AnimatedSprite> },
	idle: { [key in keyof typeof AnimationDirection]: Array<Sprite> }
}

export type BasicModelAnimation = { [key in keyof typeof Animation]: BasicModelAnimationDirection };
