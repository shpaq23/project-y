import { AnimatedSprite, Application, Sprite, Texture } from 'pixi.js';
import { Animation } from '../model/Animation';
import { AnimationDirection } from '../model/AnimationDirection';
import { WeaponAnimationModel } from '../model/WeaponAnimationModel';

export class WeaponModelController {

	// size 64x64
	private currentNormalAnimations: Array<AnimatedSprite> = [
		new AnimatedSprite([Texture.EMPTY]),
		new AnimatedSprite([Texture.EMPTY])
	];
	private currentNormalIdle: Array<Sprite> = [
		new AnimatedSprite([Texture.EMPTY]),
		new AnimatedSprite([Texture.EMPTY])
	];

	// size 128x128 or 192x192
	private currentBigAnimation: Array<AnimatedSprite> = [
		new AnimatedSprite([Texture.EMPTY]),
		new AnimatedSprite([Texture.EMPTY])
	];
	private currentBigIdle: Array<Sprite> = [
		new AnimatedSprite([Texture.EMPTY]),
		new AnimatedSprite([Texture.EMPTY])
	];


	constructor(
		private readonly application: Application,
		private readonly weaponAnimationModel: WeaponAnimationModel
	) {
		this.initialize();
	}

	walkLeft(): void {
		this.resolveAnimation('walk', AnimationDirection.left);
	}


	walkDown(): void {
		this.resolveAnimation('walk', AnimationDirection.down);
	}

	walkRight(): void {
		this.resolveAnimation('walk', AnimationDirection.right);
	}

	walkUp(): void {
		this.resolveAnimation('walk', AnimationDirection.up);
	}

	slashLeft(): void {
		this.resolveAnimation('slash', AnimationDirection.left);
	}

	slashRight(): void {
		this.resolveAnimation('slash', AnimationDirection.right);
	}

	slashUp(): void {
		this.resolveAnimation('slash', AnimationDirection.up);
	}

	slashDown(): void {
		this.resolveAnimation('slash', AnimationDirection.down);
	}

	private resolveAnimation(animation: 'walk' | 'slash' | 'thrust', direction: AnimationDirection, initial = false): void {
		if (this.currentNormalAnimations[0].playing || this.currentBigAnimation[1].playing) {
			return;
		}

		if (this.weaponAnimationModel.universal) {
			this.currentNormalAnimations[0].textures = this.weaponAnimationModel.universal.normal[animation].animation[direction].textures;
			this.copySpriteProperties(this.currentNormalAnimations[0], this.weaponAnimationModel.universal.normal[animation].animation[direction]);

			this.currentNormalIdle[0].texture = this.weaponAnimationModel.universal.normal[animation].idle[direction].texture;
			this.copySpriteProperties(this.currentNormalIdle[0], this.weaponAnimationModel.universal.normal[animation].idle[direction]);

			if (this.weaponAnimationModel.universal.behind) {
				this.currentNormalAnimations[1].textures = this.weaponAnimationModel.universal.behind[animation].animation[direction].textures;
				this.copySpriteProperties(this.currentNormalAnimations[1], this.weaponAnimationModel.universal.behind[animation].animation[direction]);

				this.currentNormalIdle[1].texture = this.weaponAnimationModel.universal.behind[animation].idle[direction].texture;
				this.copySpriteProperties(this.currentNormalIdle[1], this.weaponAnimationModel.universal.behind[animation].idle[direction]);
			}
			if (!initial) {
				this.playNormal();
			}
		} else {
			if (!initial) {
				this.hideNormal();
			}
		}

		if (this.weaponAnimationModel[animation]) {
			this.currentBigAnimation[0].textures = this.weaponAnimationModel[animation]!.normal.animation[direction].textures;
			this.copySpriteProperties(this.currentBigAnimation[0], this.weaponAnimationModel[animation]!.normal.animation[direction]);

			this.currentBigIdle[0].texture = this.weaponAnimationModel[animation]!.normal.idle[direction].texture;
			this.copySpriteProperties(this.currentBigIdle[0], this.weaponAnimationModel[animation]!.normal.idle[direction]);

			if (this.weaponAnimationModel[animation]!.behind) {
				this.currentBigAnimation[1].textures = this.weaponAnimationModel[animation]!.behind!.animation[direction].textures;
				this.copySpriteProperties(this.currentBigAnimation[1], this.weaponAnimationModel[animation]!.behind!.animation[direction]);

				this.currentBigIdle[1].texture = this.weaponAnimationModel[animation]!.behind!.idle[direction].texture;
				this.copySpriteProperties(this.currentBigIdle[1], this.weaponAnimationModel[animation]!.behind!.idle[direction]);
			}
			if (!initial) {
				this.playBig();
			}
		} else {
			if (!initial) {
				this.hideBig();
			}
		}
	}

	private copySpriteProperties(copyTo: Sprite | AnimatedSprite, copyFrom: Sprite | AnimatedSprite): void {
		copyTo.scale.set(copyFrom.scale.x, copyFrom.scale.y);
		copyTo.zIndex = copyFrom.zIndex;
		copyTo.x = copyFrom.x;
		copyTo.y = copyFrom.y;
		if (copyFrom instanceof AnimatedSprite && copyTo instanceof AnimatedSprite) {
			copyTo.animationSpeed = copyFrom.animationSpeed;
			copyTo.loop = copyFrom.loop;
		}
	}


	private playNormal(): void {

		this.currentNormalIdle.forEach((sprite) => {
			sprite.visible = false;
		});

		this.currentNormalAnimations.forEach((sprite) => {
			sprite.visible = true;
			sprite.onComplete = () => {
				this.playNormalIdle();
			};
			sprite.play();
		});


	}

	private playBig(): void {
		this.currentBigIdle.forEach((sprite) => {
			sprite.visible = false;
		});

		this.currentBigAnimation.forEach((sprite) => {
			sprite.visible = true;
			sprite.onComplete = () => {
				this.playBigIdle();
			};
			sprite.play();
		});

	}

	private initialize(): void {
		this.setInitialAnimations();
		this.addToStage();
		this.playNormalIdle();

	}

	private addToStage(): void {
		if (this.currentNormalAnimations.length > 0) {
			this.application.stage.addChild(...this.currentNormalAnimations);
		}
		if (this.currentNormalIdle.length > 0) {
			this.application.stage.addChild(...this.currentNormalIdle);
		}

		if (this.currentBigAnimation.length > 0) {
			this.application.stage.addChild(...this.currentBigAnimation);
		}

		if (this.currentBigIdle.length > 0) {
			this.application.stage.addChild(...this.currentBigIdle);
		}
	}

	private setInitialAnimations(): void {
		this.resolveAnimation(Animation.walk, AnimationDirection.down, true);
	}


	private hideNormal(): void {
		this.currentNormalIdle.forEach((sprite) => {
			sprite.visible = false;
		});

		this.currentNormalAnimations.forEach((sprite) => {
			sprite.visible = false;
		});
	}

	private hideBig(): void {
		this.currentBigIdle.forEach((sprite) => {
			sprite.visible = false;
		});

		this.currentBigAnimation.forEach((sprite) => {
			sprite.visible = false;
		});
	}


	private playNormalIdle(): void {
		this.currentNormalIdle.forEach((sprite) => {
			sprite.visible = true;
		});

		this.currentNormalAnimations.forEach((sprite) => {
			sprite.visible = false;
		});
	}

	private playBigIdle(): void {
		this.currentBigIdle.forEach((sprite) => {
			sprite.visible = true;
		});

		this.currentBigAnimation.forEach((sprite) => {
			sprite.visible = false;
		});
	}

}
