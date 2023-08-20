import { Injectable } from '@angular/core';
import { AnimatedSprite, Application, BaseTexture, Rectangle, Sprite, Texture } from 'pixi.js';
import { longSword } from '../model/LPC/LPCWeapon';
import { Animation } from './model/Animation';
import { AnimationDirection } from './model/AnimationDirection';
import { BodyAnimationModel, BodyAnimationModelDirection } from './model/BodyAnimationModel';
import { CharacterModelController } from './controllers/CharacterModelController';
import { Layer, SpriteCreator } from './SpriteCreator';
import { WeaponAnimationBodyModel, WeaponAnimationDirectionModel, WeaponAnimationModel } from './model/WeaponAnimationModel';

type DirectionTexturePack = {
	animation: { [key in keyof typeof AnimationDirection]: Array<Texture> },
	idle: { [key in keyof typeof AnimationDirection]: Texture }
};
type AnimationTexturePack = { [key in keyof typeof Animation]: DirectionTexturePack };

enum BodyPart {
	body = 'body',
	head = 'head'
}

type BodyTextures = { [key in keyof typeof BodyPart]: AnimationTexturePack };

@Injectable()
export class AnimationLoader {
	private readonly FRAME_SIZE = 64;

	private readonly CAST_FRAMES = 7;
	private readonly CAST_FRAMES_START = 0;

	private readonly THRUST_FRAMES = 8;
	private readonly THRUST_FRAMES_START = 4;

	private readonly WALK_FRAMES = 9;
	private readonly WALK_FRAMES_START = 8;

	private readonly SLASH_FRAMES = 6;
	private readonly SLASH_FRAMES_START = 12;

	private readonly SHOOT_FRAMES = 13;
	private readonly SHOOT_FRAMES_START = 16;

	private readonly DEAD_FRAMES = 6;
	private readonly DEAD_FRAMES_START = 20;

	constructor(
		private readonly spriteCreator: SpriteCreator
	) {
	}


	loadAnimation(game: Application): CharacterModelController {
		const body: BodyAnimationModel = this.getBodyAnimationModel();
		const weapon: WeaponAnimationModel = this.getWeaponAnimationModel();
		return new CharacterModelController(game, body, weapon);
	}


	private getWeaponAnimationModel(): WeaponAnimationModel {
		const weapon = longSword;
		const weaponAnimationModel: WeaponAnimationModel = {};

		if (weapon.universal) {
			const textures: AnimationTexturePack = this.getAnimationTexturePack(weapon.universal!.normal);
			weaponAnimationModel.universal = {
				normal: this.getWeaponAnimationBodyModel(textures, 'front')
			};

			if (weapon.universal.behind) {
				const textures: AnimationTexturePack = this.getAnimationTexturePack(weapon.universal!.behind!);
				weaponAnimationModel.universal!.behind = this.getWeaponAnimationBodyModel(textures, 'behind');
			}
		}


		if (weapon.walk) {
			const textures: DirectionTexturePack = this.getDirectionTexturePack(weapon.walk!.normal, this.WALK_FRAMES, 0, weapon.walk!.size);
			weaponAnimationModel.walk = {
				normal: this.getWeaponAnimationDirectionModel(textures, 'front', weapon.walk.size)
			};
			if (weapon.walk.behind) {
				const textures: DirectionTexturePack = this.getDirectionTexturePack(weapon.walk!.behind!, this.WALK_FRAMES, 0, weapon.walk!.size);
				weaponAnimationModel.walk!.behind = this.getWeaponAnimationDirectionModel(textures, 'behind', weapon.walk.size);
			}
		}

		if (weapon.slash) {
			const textures: DirectionTexturePack = this.getDirectionTexturePack(weapon.slash!.normal, this.SLASH_FRAMES, 0, weapon.slash!.size);
			weaponAnimationModel.slash = {
				normal: this.getWeaponAnimationDirectionModel(textures, 'front', weapon.slash.size)
			};
			if (weapon.slash.behind) {
				const textures: DirectionTexturePack = this.getDirectionTexturePack(weapon.slash!.behind!, this.SLASH_FRAMES, 0, weapon.slash!.size);
				weaponAnimationModel.slash!.behind = this.getWeaponAnimationDirectionModel(textures, 'behind', weapon.slash.size);
			}
		}

		if (weapon.thrust) {
			const textures: DirectionTexturePack = this.getDirectionTexturePack(weapon.thrust!.normal, this.THRUST_FRAMES, 0, weapon.thrust!.size);
			weaponAnimationModel.thrust = {
				normal: this.getWeaponAnimationDirectionModel(textures, 'front', weapon.thrust.size)
			};
			if (weapon.thrust.behind) {
				const textures: DirectionTexturePack = this.getDirectionTexturePack(weapon.thrust!.behind!, this.THRUST_FRAMES, 0, weapon.thrust!.size);
				weaponAnimationModel.thrust!.behind = this.getWeaponAnimationDirectionModel(textures, 'behind', weapon.thrust.size);
			}
		}

		return weaponAnimationModel;
	}

	private getWeaponAnimationBodyModel(textures: AnimationTexturePack, layer: Layer): WeaponAnimationBodyModel {
		return Object.values(Animation).reduce((acc, animation) => {
			(acc[animation] as WeaponAnimationDirectionModel) = this.getWeaponAnimationDirectionModel(textures[animation], layer);
			return acc;
		}, {} as WeaponAnimationBodyModel);
	}

	private getWeaponAnimationDirectionModel(textures: DirectionTexturePack, layer: Layer, oversize?: number): WeaponAnimationDirectionModel {
		return {
			animation: Object.values(AnimationDirection).reduce((acc, direction) => {
				(acc[direction] as AnimatedSprite) = this.spriteCreator.createAnimatedSprite(textures.animation[direction], layer, oversize);
				return acc;
			}, {} as { [key in keyof typeof AnimationDirection]: AnimatedSprite }),
			idle: Object.values(AnimationDirection).reduce((acc, direction) => {
				(acc[direction] as Sprite) = this.spriteCreator.createSprite(textures.idle[direction], layer, oversize);
				return acc;
			}, {} as { [key in keyof typeof AnimationDirection]: Sprite })
		};
	}

	private getBodyAnimationModel(): BodyAnimationModel {
		const bodyUrl = 'assets/body/bodies/male/universal.png';
		const headUrl = 'assets/head/heads/human_male/universal.png';
		const bodyTextures: BodyTextures = {
			body: this.getAnimationTexturePack(bodyUrl),
			head: this.getAnimationTexturePack(headUrl)
		};


		const bodyAnimationModel: BodyAnimationModel = Object.values(Animation).reduce((acc, animation) => {
			(acc[animation] as BodyAnimationModelDirection) = {
				animation: Object.values(AnimationDirection).reduce((acc, direction) => {
					(acc[direction] as Array<AnimatedSprite>) = Object.values(BodyPart).map(part => this.spriteCreator.createAnimatedSprite(bodyTextures[part][animation].animation[direction], 'normal'));
					return acc;
				}, {} as { [key in keyof typeof AnimationDirection]: Array<AnimatedSprite> }),
				idle: Object.values(AnimationDirection).reduce((acc, direction) => {
					(acc[direction] as Array<Sprite>) = Object.values(BodyPart).map(part => this.spriteCreator.createSprite(bodyTextures[part][animation].idle[direction], 'normal'));
					return acc;
				}, {} as { [key in keyof typeof AnimationDirection]: Array<Sprite> })
			};
			return acc;
		}, {} as { [key in keyof typeof Animation]: BodyAnimationModelDirection });

		return bodyAnimationModel;
	}

	private getDirectionTexturePack(url: string, frames: number, startFrame: number, frameSize: number): DirectionTexturePack {
		const sheet = BaseTexture.from(url);

		const animationUp: Array<Texture> = [];
		let idleUp: Texture;

		const animationLeft: Array<Texture> = [];
		let idleLeft: Texture;

		const animationDown: Array<Texture> = [];
		let idleDown: Texture;

		const animationRight: Array<Texture> = [];
		let idleRight: Texture;

		for (let i = 0; i < frames; i++) {

			if (i === 0) {
				idleUp = new Texture(sheet, new Rectangle(0, startFrame * frameSize, frameSize, frameSize));
				idleLeft = new Texture(sheet, new Rectangle(0, (startFrame + 1) * frameSize, frameSize, frameSize));
				idleDown = new Texture(sheet, new Rectangle(0, (startFrame + 2) * frameSize, frameSize, frameSize));
				idleRight = new Texture(sheet, new Rectangle(0, (startFrame + 3) * frameSize, frameSize, frameSize));
				continue;
			}

			animationUp.push(new Texture(sheet, new Rectangle(i * frameSize, startFrame * frameSize, frameSize, frameSize)));
			animationLeft.push(new Texture(sheet, new Rectangle(i * frameSize, (startFrame + 1) * frameSize, frameSize, frameSize)));
			animationDown.push(new Texture(sheet, new Rectangle(i * frameSize, (startFrame + 2) * frameSize, frameSize, frameSize)));
			animationRight.push(new Texture(sheet, new Rectangle(i * frameSize, (startFrame + 3) * frameSize, frameSize, frameSize)));
		}

		return {
			animation: {
				up: animationUp,
				left: animationLeft,
				down: animationDown,
				right: animationRight
			},
			idle: {
				up: idleUp!,
				left: idleLeft!,
				down: idleDown!,
				right: idleRight!
			}
		};
	}

	getDeathDirectionTexturePack(url: string): DirectionTexturePack {
		const sheet = BaseTexture.from(url);
		const animation: Array<Texture> = [];
		let idle: Texture;

		for (let i = 0; i < this.DEAD_FRAMES; i++) {
			if (i === 0) {
				idle = new Texture(sheet, new Rectangle(0, this.DEAD_FRAMES_START * this.FRAME_SIZE, this.FRAME_SIZE, this.FRAME_SIZE));
				continue;
			}
			animation.push(new Texture(sheet, new Rectangle(i * this.FRAME_SIZE, this.DEAD_FRAMES_START * this.FRAME_SIZE, this.FRAME_SIZE, this.FRAME_SIZE)));
		}
		return {
			animation: { up: animation, left: animation, down: animation, right: animation },
			idle: { up: idle!, left: idle!, down: idle!, right: idle! }
		}

	}

	private getAnimationTexturePack(url: string): AnimationTexturePack {
		const death = this.getDeathDirectionTexturePack(url);
		const walk = this.getDirectionTexturePack(url, this.WALK_FRAMES, this.WALK_FRAMES_START, this.FRAME_SIZE);
		const slash = this.getDirectionTexturePack(url, this.SLASH_FRAMES, this.SLASH_FRAMES_START, this.FRAME_SIZE);
		const thrust = this.getDirectionTexturePack(url, this.THRUST_FRAMES, this.THRUST_FRAMES_START, this.FRAME_SIZE);
		const shoot = this.getDirectionTexturePack(url, this.SHOOT_FRAMES, this.SHOOT_FRAMES_START, this.FRAME_SIZE);
		const cast = this.getDirectionTexturePack(url, this.CAST_FRAMES, this.CAST_FRAMES_START, this.FRAME_SIZE);
		return { walk, slash, thrust, shoot, death, cast };
	}

}
