import { AnimatedSprite, Application, Sprite, Texture } from 'pixi.js';
import { Animation } from './animation/Animation';
import { AnimationDirection } from './animation/AnimationDirection';
import { AnimationModelHelper } from './AnimationModelHelper';
import { CharacterBasicAnimation } from './CharacterBasicAnimation';


export class ModelBodyController {

	private readonly helper = new AnimationModelHelper();
	private readonly animationModel = this.helper.getBasicModelAnimation(this.basic);

	private readonly currentAnimatedSprites: Array<AnimatedSprite> = this.helper.getBasicModelAnimation(this.basic).walk.animation.down;
	private readonly currentIdleSprite: Array<Sprite> = this.helper.getBasicModelAnimation(this.basic).walk.idle.down;

	constructor(
		private readonly application: Application,
		private readonly basic: CharacterBasicAnimation
	) {
		this.initialize();
	}

	walkLeft(): void {
		this.resolveAnimation(Animation.walk, AnimationDirection.left);
	}

	walkRight(): void {
		this.resolveAnimation(Animation.walk, AnimationDirection.right);
	}

	walkUp(): void {
		this.resolveAnimation(Animation.walk, AnimationDirection.up);
	}

	walkDown(): void {
		this.resolveAnimation(Animation.walk, AnimationDirection.down);
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

	private resolveAnimation(animation: Animation, direction: AnimationDirection): void {
		if (this.currentAnimatedSprites[0].playing) {
			return;
		}

		for (let i = 0; i < this.currentAnimatedSprites.length; i++) {
			let texture: Texture;
			let textures: Array<Texture>;
			texture = this.animationModel[animation].idle[direction][i].texture;
			textures = this.animationModel[animation].animation[direction][i].textures as Array<Texture>;
			this.currentAnimatedSprites[i].textures = textures;
			this.currentIdleSprite[i].texture = texture;
		}
		this.play();
	}

	private initialize(): void {
		this.application.stage.addChild(...this.currentAnimatedSprites);
		this.application.stage.addChild(...this.currentIdleSprite);
		this.playIdle();
	}

	private play(): void {
		this.currentIdleSprite.forEach(sprite => {
			sprite.visible = false;
		});

		this.currentAnimatedSprites.forEach((sprite, index) => {
			sprite.visible = true;
			sprite.play();
			sprite.onComplete = () => {
				this.playIdle();
			};
		});
	}

	private playIdle(): void {
		this.currentAnimatedSprites.forEach(sprite => {
			sprite.visible = false;
		});
		this.currentIdleSprite.forEach(sprite => {
			sprite.visible = true;
		});
	}
}
