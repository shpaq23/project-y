import { AnimatedSprite, Application } from 'pixi.js';
import { AnimationModelHelper } from './AnimationModelHelper';
import { CharacterWeaponAnimation } from './CharacterWeaponAnimation';

export class ModelWeaponController {

	private readonly helper = new AnimationModelHelper();

	private readonly animationModel = this.helper.getWeaponModelAnimation(this.weapon);


	// size 64x64
	private universalNormalAnimation: AnimatedSprite | undefined;
	private universalBehindAnimation: AnimatedSprite | undefined;


	// size 128x128 or 192x192
	private walkAnimation: AnimatedSprite | undefined;
	private walkBehindAnimation: AnimatedSprite | undefined;

	private slashAnimation: AnimatedSprite | undefined;
	private slashBehindAnimation: AnimatedSprite | undefined;

	private thrustAnimation: AnimatedSprite | undefined;
	private thrustBehindAnimation: AnimatedSprite | undefined;



	// size 64x64
	private currentNormalAnimations: Array<AnimatedSprite> = [];

	// size 128x128 or 192x192
	private currentBigAnimations: Array<AnimatedSprite> = [];


	constructor(
		private readonly application: Application,
		private readonly weapon: CharacterWeaponAnimation
	) {
		this.initialize();
	}

	walkLeft(): void {
		this.currentNormalAnimations[0].textures = this.animationModel.universal!.normal.walk.animation.left.textures;
		this.currentNormalAnimations[1].textures = this.animationModel.universal!.behind!.walk.animation.left.textures;
		this.play();
	}


	walkDown(): void {
		this.currentNormalAnimations[0].textures = this.animationModel.universal!.normal.walk.animation.down.textures;
		this.currentNormalAnimations[0].zIndex = 11;
		this.currentNormalAnimations[1].textures = this.animationModel.universal!.behind!.walk.animation.down.textures;

		this.play();
	}





	private play(): void {
		this.currentNormalAnimations.forEach((sprite) => {
			sprite.onComplete = () => {
				sprite.currentFrame = 0;
			};
			sprite.play();
		});

		this.currentBigAnimations.forEach((sprite) => {
			sprite.loop = false;
			sprite.onComplete = () => {
				sprite.currentFrame = 0;
			};
			sprite.play();
		});
	}



	private initialize(): void {
		this.setAnimations();
		this.setCurrentAnimations();
		this.application.stage.addChild(...this.currentNormalAnimations, ...this.currentBigAnimations);
	}

	private setAnimations(): void {
		const weaponModelAnimation = this.helper.getWeaponModelAnimation(this.weapon);

		if (weaponModelAnimation.universal) {
			this.universalNormalAnimation = weaponModelAnimation.universal.normal.walk.animation.down;
			if (weaponModelAnimation.universal.behind) {
				this.universalBehindAnimation = weaponModelAnimation.universal.behind.walk.animation.down;
			}
		}

		if (weaponModelAnimation.walk) {
			this.walkAnimation = weaponModelAnimation.walk.normal.animation.down;
			if (weaponModelAnimation.walk.behind) {
				this.walkBehindAnimation = weaponModelAnimation.walk.behind.animation.down;
			}
		}

		if (weaponModelAnimation.slash) {
			this.slashAnimation = weaponModelAnimation.slash.normal.animation.down;
			if (weaponModelAnimation.slash.behind) {
				this.slashBehindAnimation = weaponModelAnimation.slash.behind.animation.down;
			}
		}

		if (weaponModelAnimation.thrust) {
			this.thrustAnimation = weaponModelAnimation.thrust.normal.animation.down;
			if (weaponModelAnimation.thrust.behind) {
				this.thrustBehindAnimation = weaponModelAnimation.thrust.behind.animation.down;
			}
		}
	}

	private setCurrentAnimations(): void {
		this.currentNormalAnimations = [];
		this.currentBigAnimations = [];

		if (this.universalNormalAnimation) {
			this.currentNormalAnimations.push(this.universalNormalAnimation);
		}

		if (this.universalBehindAnimation) {
			this.currentNormalAnimations.push(this.universalBehindAnimation);
		}

		if (this.walkAnimation) {
			this.currentBigAnimations.push(this.walkAnimation);
		}

		if (this.walkBehindAnimation) {
			this.currentBigAnimations.push(this.walkBehindAnimation);
		}

		if (this.slashAnimation) {
			this.currentBigAnimations.push(this.slashAnimation);
		}

		if (this.slashBehindAnimation) {
			this.currentBigAnimations.push(this.slashBehindAnimation);
		}

		if (this.thrustAnimation) {
			this.currentBigAnimations.push(this.thrustAnimation);
		}

		if (this.thrustBehindAnimation) {
			this.currentBigAnimations.push(this.thrustBehindAnimation);
		}
	}
}
