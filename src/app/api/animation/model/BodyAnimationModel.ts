import { AnimatedSprite, Sprite } from 'pixi.js';
import { AnimationDirection } from './AnimationDirection';
import { Animation } from './Animation';

export type BodyAnimationModelDirection = {
	animation: { [key in keyof typeof AnimationDirection]: Array<AnimatedSprite> },
	idle: { [key in keyof typeof AnimationDirection]: Array<Sprite> }
}

export type BodyAnimationModel = { [key in keyof typeof Animation]: BodyAnimationModelDirection };
