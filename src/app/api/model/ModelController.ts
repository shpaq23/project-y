import { AnimatedSprite, Application, Sprite } from 'pixi.js';
import { Observable, of } from 'rxjs';
import { AnimationModelHelper } from './AnimationModelHelper';
import { CharacterBasicAnimation } from './CharacterBasicAnimation';
import { CharacterWeaponAnimation } from './CharacterWeaponAnimation';
import { ModelWeaponController } from './ModelWeaponController';
import { PixiAnimationDirection } from './PixiAnimationDirection';


export class ModelController {

	private readonly helper = new AnimationModelHelper();

	private readonly animationModel = this.helper.getBasicModelAnimation(this.basic);

	private readonly currentAnimatedSprites: Array<AnimatedSprite> = this.helper.getBasicModelAnimation(this.basic).walk.animation.down;

	private readonly currentIdleSprite: Array<Sprite> = this.helper.getBasicModelAnimation(this.basic).walk.idle.down;

	private readonly currentSlashBigTexture: AnimatedSprite | undefined = this.slashBig?.getDownAnimatedSprite();

	private readonly currentWalkBigTexture: AnimatedSprite | undefined = this.walkBig?.getDownAnimatedSprite();

	private readonly weaponController: ModelWeaponController | undefined = this.weapon ? new ModelWeaponController(this.application, this.weapon) : undefined;

	constructor(
		private readonly application: Application,
		private readonly basic: CharacterBasicAnimation,
		private readonly weapon?: CharacterWeaponAnimation,
		private readonly walkBig?: PixiAnimationDirection,
		private readonly slashBig?: PixiAnimationDirection
	) {
		this.initialize();
	}

	walkLeft(): Observable<void> {
		if (this.currentAnimatedSprites[0].playing) {
			return of();
		}




		this.currentAnimatedSprites.forEach((sprite, index) => {
			sprite.textures = this.animationModel.walk.animation.left[index].textures;
		});

		this.currentSlashBigTexture!.visible = false;

		if (this.currentWalkBigTexture) {
			this.currentWalkBigTexture.textures = this.walkBig!.getLeftAnimatedSprite().textures;
			this.currentWalkBigTexture.zIndex = 1;
			this.currentWalkBigTexture.x = -128 + 64;
			this.currentWalkBigTexture.y = -128 + 64;
		}
		//

		// this.currentAnimatedSprites.forEach((texture) => {
		// 	texture.x -= 64;
		// });
		this.weaponController?.walkLeft();
		return this.play();
	}

	walkRight(): Observable<void> {
		if (this.currentAnimatedSprites[0].playing) {
			return of();
		}

		this.currentAnimatedSprites.forEach((sprite, index) => {
			sprite.textures = this.animationModel.walk.animation.right[index].textures;
		});

		if (this.currentWalkBigTexture) {
			this.currentWalkBigTexture.textures = this.walkBig!.getRightAnimatedSprite().textures;
			this.currentWalkBigTexture.zIndex = 1;
			this.currentWalkBigTexture.x = -128 + 64;
			this.currentWalkBigTexture.y = -128 + 64;
		}

		// this.currentAnimatedSprites.forEach((texture) => {
		// 	texture.x += 64;
		// });
		return this.play();
	}

	walkUp(): Observable<void> {
		if (this.currentAnimatedSprites[0].playing) {
			return of();
		}

		this.currentAnimatedSprites.forEach((sprite, index) => {
			sprite.textures = this.animationModel.walk.animation.up[index].textures;
		});

		if (this.currentWalkBigTexture) {
			this.currentWalkBigTexture.textures = this.walkBig!.getUpAnimatedSprite().textures;
			this.currentWalkBigTexture.zIndex = 1;
			this.currentWalkBigTexture.x = -128 + 64;
			this.currentWalkBigTexture.y = -128 + 64;
		}

		return this.play();
	}

	walkDown(): Observable<void> {
		if (this.currentAnimatedSprites[0].playing) {
			return of();
		}


		this.currentAnimatedSprites.forEach((sprite, index) => {
			sprite.textures = this.animationModel.walk.animation.down[index].textures;
		});

		if (this.currentWalkBigTexture) {
			this.currentWalkBigTexture.textures = this.walkBig!.getDownAnimatedSprite().textures;
			this.currentWalkBigTexture.zIndex = 1;
			this.currentWalkBigTexture.x = -128 + 64;
			this.currentWalkBigTexture.y = -128 + 64;
		}
		this.weaponController?.walkDown();
		return this.play();
	}

	slashLeft(): Observable<void> {
		if (this.currentAnimatedSprites[0].playing) {
			return of();
		}

		this.currentAnimatedSprites.forEach((sprite, index) => {
			sprite.textures = this.animationModel.slash.animation.left[index].textures;
		});


		if (this.currentSlashBigTexture) {
			this.currentSlashBigTexture.textures = this.slashBig!.getLeftAnimatedSprite().textures;
			this.currentSlashBigTexture.x = -192 + 64;
			this.currentSlashBigTexture.y = -192 + 64;
		}

		return this.play();
	}

	slashRight(): Observable<void> {
		if (this.currentAnimatedSprites[0].playing) {
			return of();
		}

		this.currentAnimatedSprites.forEach((sprite, index) => {
			sprite.textures = this.animationModel.slash.animation.right[index].textures;
		});


		if (this.currentSlashBigTexture) {
			this.currentSlashBigTexture.textures = this.slashBig!.getRightAnimatedSprite().textures;
			this.currentSlashBigTexture.x = -192 + 64;
			this.currentSlashBigTexture.y = -192 + 64;
		}

		return this.play();
	}

	slashUp(): Observable<void> {
		if (this.currentAnimatedSprites[0].playing) {
			return of();
		}

		this.currentAnimatedSprites.forEach((sprite, index) => {
			sprite.textures = this.animationModel.slash.animation.up[index].textures;
		});


		if (this.currentSlashBigTexture) {
			this.currentSlashBigTexture.textures = this.slashBig!.getUpAnimatedSprite().textures;
			this.currentSlashBigTexture.x = -192 + 64;
			this.currentSlashBigTexture.y = -192 + 64;
		}

		return this.play();
	}

	slashDown(): Observable<void> {
		if (this.currentAnimatedSprites[0].playing) {
			return of();
		}

		this.currentAnimatedSprites.forEach((sprite, index) => {
			sprite.textures = this.animationModel.slash.animation.down[index].textures;
		});


		if (this.currentSlashBigTexture) {
			this.currentSlashBigTexture.textures = this.slashBig!.getDownAnimatedSprite().textures;
			this.currentSlashBigTexture.x = -192 + 64;
			this.currentSlashBigTexture.y = -192 + 64;
		}

		return this.play();
	}

	private initialize(): void {
		this.application.stage.addChild(...this.currentAnimatedSprites);
		if (this.currentSlashBigTexture) {
			this.application.stage.addChild(this.currentSlashBigTexture);
		}
		if (this.currentWalkBigTexture) {
			this.application.stage.addChild(this.currentWalkBigTexture);
		}
	}

	private play(): Observable<void> {
		return new Observable((observer) => {
			this.currentAnimatedSprites.forEach((sprite) => {
				sprite.play();
				sprite.onComplete = () => {
					sprite.currentFrame = 0;
					observer.next();
					observer.complete();
				};
			});
			if (this.currentSlashBigTexture) {
				this.currentSlashBigTexture.play();
				this.currentSlashBigTexture.onComplete = () => {
					this.currentSlashBigTexture!.currentFrame = 0;
				};
			}

			if (this.currentWalkBigTexture) {
				this.currentWalkBigTexture.play();
				this.currentWalkBigTexture.onComplete = () => {
					this.currentWalkBigTexture!.currentFrame = 0;
				};
			}
		});
	}
}
