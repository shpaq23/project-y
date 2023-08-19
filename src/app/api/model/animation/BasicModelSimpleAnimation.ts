import { AnimatedSprite, Sprite } from 'pixi.js';
import { AnimationDirection } from './AnimationDirection';
import { Animation } from './Animation';

export type BasicModelSimpleAnimationDirection = {
	animation: { [key in keyof typeof AnimationDirection]: AnimatedSprite },
	idle: { [key in keyof typeof AnimationDirection]: Sprite }
}

export type BasicModelSimpleAnimation = { [key in keyof typeof Animation]: BasicModelSimpleAnimationDirection };
