import { AnimatedSprite, Application } from 'pixi.js';
import { Observable, of } from 'rxjs';
import { PixiAnimation } from './PixiAnimation';
import { PixiAnimationDirection } from './PixiAnimationDirection';

export class ModelController {

	private readonly currentTexture: Array<AnimatedSprite> = this.getWalkDownSprites();

	private readonly currentSlashBigTexture: AnimatedSprite | undefined = this.slashBig?.getDownAnimatedSprite();

	private readonly currentWalkBigTexture: AnimatedSprite | undefined = this.walkBig?.getDownAnimatedSprite();


	constructor(
		private readonly application: Application,
		private readonly body: PixiAnimation,
		private readonly head: PixiAnimation,
		private readonly walkBig?: PixiAnimationDirection,
		private readonly slashBig?: PixiAnimationDirection
	) {
		this.initialize();
	}

	walkLeft(): Observable<void> {
		if (this.currentTexture[0].playing) {
			return of();
		}
		this.currentTexture.forEach((sprite, index) => {
			sprite.textures = this.getWalkLeftSprites()[index].textures;
		});

		if (this.currentWalkBigTexture) {
			this.currentWalkBigTexture.textures = this.walkBig!.getLeftAnimatedSprite().textures;
			this.currentWalkBigTexture.zIndex = 1;
			this.currentWalkBigTexture.x = -128 + 64;
			this.currentWalkBigTexture.y = -128 + 64;
		}
		this.addCurrentToStage();
		this.currentTexture.forEach((texture) => {
			texture.x -= 64;
		});
		return this.play();
	}

	walkRight(): Observable<void> {
		if (this.currentTexture[0].playing) {
			return of();
		}

		this.currentTexture.forEach((sprite, index) => {
			sprite.textures = this.getWalkRightSprites()[index].textures;
		});

		if (this.currentWalkBigTexture) {
			this.currentWalkBigTexture.textures = this.walkBig!.getRightAnimatedSprite().textures;
			this.currentWalkBigTexture.zIndex = 1;
			this.currentWalkBigTexture.x = -128 + 64;
			this.currentWalkBigTexture.y = -128 + 64;
		}

		this.addCurrentToStage();
		this.currentTexture.forEach((texture) => {
			texture.x += 64;
		});
		return this.play();
	}

	walkUp(): Observable<void> {
		if (this.currentTexture[0].playing) {
			return of();
		}

		this.currentTexture.forEach((sprite, index) => {
			sprite.textures = this.getWalkUpSprites()[index].textures;
		});

		if (this.currentWalkBigTexture) {
			this.currentWalkBigTexture.textures = this.walkBig!.getUpAnimatedSprite().textures;
			this.currentWalkBigTexture.zIndex = 1;
			this.currentWalkBigTexture.x = -128 + 64;
			this.currentWalkBigTexture.y = -128 + 64;
		}

		this.addCurrentToStage();
		return this.play();
	}

	walkDown(): Observable<void> {
		if (this.currentTexture[0].playing) {
			return of();
		}

		this.currentTexture.forEach((sprite, index) => {
			sprite.textures = this.getWalkDownSprites()[index].textures;
		});

		if (this.currentWalkBigTexture) {
			this.currentWalkBigTexture.textures = this.walkBig!.getDownAnimatedSprite().textures;
			this.currentWalkBigTexture.zIndex = 1;
			this.currentWalkBigTexture.x = -128 + 64;
			this.currentWalkBigTexture.y = -128 + 64;
		}
		this.addCurrentToStage();
		return this.play();
	}

	slashLeft(): Observable<void> {
		if (this.currentTexture[0].playing) {
			return of();
		}

		// this.currentTexture = this.getSlashLeftSprites();
		//
		// if (this.slashBig) {
		// 	this.currentSlashBigTexture = this.slashBig.getLeftAnimatedSprite();
		// 	this.currentSlashBigTexture.x = -192 + 64;
		// 	this.currentSlashBigTexture.y = -192 + 64;
		// }
		this.addCurrentToStage();

		return this.play();
	}

	slashRight(): Observable<void> {
		if (this.currentTexture[0].playing) {
			return of();
		}
		// this.currentTexture = this.getSlashRightSprites();
		//
		// if (this.slashBig) {
		// 	this.currentSlashBigTexture = this.slashBig.getRightAnimatedSprite();
		// 	this.currentSlashBigTexture.x = -192 + 64;
		// 	this.currentSlashBigTexture.y = -192 + 64;
		// }
		this.addCurrentToStage();
		return this.play();
	}

	slashUp(): Observable<void> {
		if (this.currentTexture[0].playing) {
			return of();
		}
		// this.currentTexture = this.getSlashUpSprites();
		//
		// if (this.slashBig) {
		// 	this.currentSlashBigTexture = this.slashBig.getUpAnimatedSprite();
		// 	this.currentSlashBigTexture.x = -192 + 64;
		// 	this.currentSlashBigTexture.y = -192 + 64;
		// }
		this.addCurrentToStage();
		return this.play();
	}

	slashDown(): Observable<void> {
		if (this.currentTexture[0].playing) {
			return of();
		}
		// this.currentTexture = this.getSlashDownSprites();
		//
		// if (this.slashBig) {
		// 	this.currentSlashBigTexture = this.slashBig.getDownAnimatedSprite();
		// 	this.currentSlashBigTexture.x = -192 + 64;
		// 	this.currentSlashBigTexture.y = -192 + 64;
		// }

		this.addCurrentToStage();
		return this.play();
	}

	private initialize(): void {
		this.application.stage.addChild(...this.currentTexture);
		if (this.currentSlashBigTexture) {
			this.application.stage.addChild(this.currentSlashBigTexture);
		}
		if (this.currentWalkBigTexture) {
			this.application.stage.addChild(this.currentWalkBigTexture);
		}
	}

	private addCurrentToStage(): void {
		return;
		// this.application.stage.addChild(...this.currentTexture);
		// if (this.currentSlashBigTexture) {
		// 	this.application.stage.addChild(this.currentSlashBigTexture);
		// }
		// if (this.currentWalkBigTexture) {
		// 	this.application.stage.addChild(this.currentWalkBigTexture);
		// }
	}

	private play(): Observable<void> {
		return new Observable((observer) => {
			this.currentTexture.forEach((sprite) => {
				sprite.play();
				sprite.loop = false;
				sprite.onComplete = () => {
					sprite.currentFrame = 0;
					observer.next();
					observer.complete();
				};
			});
			if (this.currentSlashBigTexture) {
				this.currentSlashBigTexture.play();
				this.currentSlashBigTexture.loop = false;
				this.currentSlashBigTexture.onComplete = () => {
					this.currentSlashBigTexture!.currentFrame = 0;
				};
			}

			if (this.currentWalkBigTexture) {
				this.currentWalkBigTexture.play();
				this.currentWalkBigTexture.loop = false;
				this.currentWalkBigTexture.onComplete = () => {
					this.currentWalkBigTexture!.currentFrame = 0;
				};
			}
		});
	}

	private getWalkLeftSprites(): Array<AnimatedSprite> {
		return [
			this.body.getWalk().getLeftAnimatedSprite(),
			this.head.getWalk().getLeftAnimatedSprite()
		];
	}

	private getWalkRightSprites(): Array<AnimatedSprite> {
		return [
			this.body.getWalk().getRightAnimatedSprite(),
			this.head.getWalk().getRightAnimatedSprite()
		];
	}

	private getWalkUpSprites(): Array<AnimatedSprite> {
		return [
			this.body.getWalk().getUpAnimatedSprite(),
			this.head.getWalk().getUpAnimatedSprite()
		];
	}

	private getWalkDownSprites(): Array<AnimatedSprite> {
		return [
			this.body.getWalk().getDownAnimatedSprite(),
			this.head.getWalk().getDownAnimatedSprite()
		];
	}

	private getSlashLeftSprites(): Array<AnimatedSprite> {
		return [
			this.body.getSlash().getLeftAnimatedSprite(),
			this.head.getSlash().getLeftAnimatedSprite()
		];
	}

	private getSlashRightSprites(): Array<AnimatedSprite> {
		return [
			this.body.getSlash().getRightAnimatedSprite(),
			this.head.getSlash().getRightAnimatedSprite()
		];
	}

	private getSlashUpSprites(): Array<AnimatedSprite> {
		return [
			this.body.getSlash().getUpAnimatedSprite(),
			this.head.getSlash().getUpAnimatedSprite()
		];
	}

	private getSlashDownSprites(): Array<AnimatedSprite> {
		return [
			this.body.getSlash().getDownAnimatedSprite(),
			this.head.getSlash().getDownAnimatedSprite()
		];
	}

}
