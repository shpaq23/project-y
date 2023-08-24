import { AnimatedSprite, Sprite } from 'pixi.js';
import { AnimationDirection } from './AnimationDirection';
import { Animation } from './Animation';

export type BodyAnimationModelDirection = {
	animation: { [key in AnimationDirection]: Array<AnimatedSprite> },
	idle: { [key in AnimationDirection]: Array<Sprite> }
}

export type BodyAnimationModel = { [key in Animation]: BodyAnimationModelDirection };
