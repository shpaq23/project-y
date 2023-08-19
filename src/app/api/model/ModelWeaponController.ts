import { AnimatedSprite, Application, Sprite, Texture } from 'pixi.js';
import { Animation } from './animation/Animation';
import { AnimationDirection } from './animation/AnimationDirection';
import { AnimationModelHelper } from './AnimationModelHelper';
import { CharacterWeaponAnimation } from './CharacterWeaponAnimation';

export class ModelWeaponController {

	private readonly helper = new AnimationModelHelper();
	private readonly animationModel = this.helper.getWeaponModelAnimation(this.weapon);

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
		private readonly weapon: CharacterWeaponAnimation
	) {
		this.initialize();
	}

	walkLeft(): void {
		this.resolveAnimation(Animation.walk, AnimationDirection.left);
	}


	walkDown(): void {
		this.resolveAnimation(Animation.walk, AnimationDirection.down);
	}

	walkRight(): void {
		this.resolveAnimation(Animation.walk, AnimationDirection.right);
	}

	walkUp(): void {
		this.resolveAnimation(Animation.walk, AnimationDirection.up);
	}

	slashLeft(): void {
		this.resolveAnimation(Animation.slash, AnimationDirection.left);
	}

	slashRight(): void {
		this.resolveAnimation(Animation.slash, AnimationDirection.right);
	}

	slashUp(): void {
		this.resolveAnimation(Animation.slash, AnimationDirection.up);
	}

	slashDown(): void {
		this.resolveAnimation(Animation.slash, AnimationDirection.down);
	}

	private resolveAnimation(animation: Animation, direction: AnimationDirection, initial = false): void {
		if (this.currentNormalAnimations[0].playing || this.currentBigAnimation[1].playing) {
			return;
		}

		if (this.animationModel.universal) {
			this.currentNormalAnimations[0].textures = this.animationModel.universal.normal[animation].animation[direction].textures;
			this.copySpriteProperties(this.currentNormalAnimations[0], this.animationModel.universal.normal[animation].animation[direction]);

			this.currentNormalIdle[0].texture = this.animationModel.universal.normal[animation].idle[direction].texture;
			this.copySpriteProperties(this.currentNormalIdle[0], this.animationModel.universal.normal[animation].idle[direction]);

			if (this.animationModel.universal.behind) {
				this.currentNormalAnimations[1].textures = this.animationModel.universal.behind[animation].animation[direction].textures;
				this.copySpriteProperties(this.currentNormalAnimations[1], this.animationModel.universal.behind[animation].animation[direction]);

				this.currentNormalIdle[1].texture = this.animationModel.universal.behind[animation].idle[direction].texture;
				this.copySpriteProperties(this.currentNormalIdle[1], this.animationModel.universal.behind[animation].idle[direction]);
			}
			if (!initial) {
				this.playNormal();
			}
		} else {
			if (!initial) {
				this.hideNormal();
			}
		}

		if (this.animationModel[animation]) {
			this.currentBigAnimation[0].textures = this.animationModel[animation]!.normal.animation[direction].textures;
			this.copySpriteProperties(this.currentBigAnimation[0], this.animationModel[animation]!.normal.animation[direction]);

			this.currentBigIdle[0].texture = this.animationModel[animation]!.normal.idle[direction].texture;
			this.copySpriteProperties(this.currentBigIdle[0], this.animationModel[animation]!.normal.idle[direction]);

			if (this.animationModel[animation]!.behind) {
				this.currentBigAnimation[1].textures = this.animationModel[animation]!.behind!.animation[direction].textures;
				this.copySpriteProperties(this.currentBigAnimation[1], this.animationModel[animation]!.behind!.animation[direction]);

				this.currentBigIdle[1].texture = this.animationModel[animation]!.behind!.idle[direction].texture;
				this.copySpriteProperties(this.currentBigIdle[1], this.animationModel[animation]!.behind!.idle[direction]);
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
