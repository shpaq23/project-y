import { AnimatedSprite, Application, Sprite } from 'pixi.js';
import { Observable, of } from 'rxjs';
import { AnimationModelHelper } from './AnimationModelHelper';
import { CharacterBasicAnimation } from './CharacterBasicAnimation';
import { CharacterWeaponAnimation } from './CharacterWeaponAnimation';
import { ModelWeaponController } from './ModelWeaponController';


export class ModelController {

	private readonly helper = new AnimationModelHelper();

	private readonly animationModel = this.helper.getBasicModelAnimation(this.basic);

	private readonly currentAnimatedSprites: Array<AnimatedSprite> = this.helper.getBasicModelAnimation(this.basic).walk.animation.down;

	private readonly currentIdleSprite: Array<Sprite> = this.helper.getBasicModelAnimation(this.basic).walk.idle.down;

	private readonly weaponController: ModelWeaponController | undefined = this.weapon ? new ModelWeaponController(this.application, this.weapon) : undefined;

	constructor(
		private readonly application: Application,
		private readonly basic: CharacterBasicAnimation,
		private readonly weapon?: CharacterWeaponAnimation
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


		return this.play();
	}

	walkDown(): Observable<void> {
		if (this.currentAnimatedSprites[0].playing) {
			return of();
		}


		this.currentAnimatedSprites.forEach((sprite, index) => {
			sprite.textures = this.animationModel.walk.animation.down[index].textures;
		});

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


		return this.play();
	}

	slashRight(): Observable<void> {
		if (this.currentAnimatedSprites[0].playing) {
			return of();
		}

		this.currentAnimatedSprites.forEach((sprite, index) => {
			sprite.textures = this.animationModel.slash.animation.right[index].textures;
		});


		return this.play();
	}

	slashUp(): Observable<void> {
		if (this.currentAnimatedSprites[0].playing) {
			return of();
		}

		this.currentAnimatedSprites.forEach((sprite, index) => {
			sprite.textures = this.animationModel.slash.animation.up[index].textures;
		});

		return this.play();
	}

	slashDown(): Observable<void> {
		if (this.currentAnimatedSprites[0].playing) {
			return of();
		}

		this.currentAnimatedSprites.forEach((sprite, index) => {
			sprite.textures = this.animationModel.slash.animation.down[index].textures;
		});


		return this.play();
	}

	private initialize(): void {
		this.application.stage.addChild(...this.currentAnimatedSprites);
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
		});
	}
}
