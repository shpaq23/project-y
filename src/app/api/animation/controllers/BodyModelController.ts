import { AnimatedSprite, Application, Sprite, Texture } from 'pixi.js';
import { Animation } from '../model/Animation';
import { AnimationDirection } from '../model/AnimationDirection';
import { BodyAnimationModel } from '../model/BodyAnimationModel';
import { SpriteCreator } from '../SpriteCreator';


export class BodyModelController {

	private readonly spriteCreator = new SpriteCreator();

	private readonly currentAnimatedSprites: Array<AnimatedSprite> = this.bodyAnimationModel.walk.animation.down.map(sprite => {
		return this.spriteCreator.copySprite(sprite) as AnimatedSprite;
	});
	private readonly currentIdleSprite: Array<Sprite> = this.bodyAnimationModel.walk.idle.down.map(sprite => {
		return this.spriteCreator.copySprite(sprite) as Sprite;
	});

	constructor(
		private readonly application: Application,
		private readonly bodyAnimationModel: BodyAnimationModel
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

	thrustLeft(): void {
		this.resolveAnimation(Animation.thrust, AnimationDirection.left);
	}

	thrustRight(): void {
		this.resolveAnimation(Animation.thrust, AnimationDirection.right);
	}

	thrustUp(): void {
		this.resolveAnimation(Animation.thrust, AnimationDirection.up);
	}

	thrustDown(): void {
		this.resolveAnimation(Animation.thrust, AnimationDirection.down);
	}

	castLeft(): void {
		this.resolveAnimation(Animation.cast, AnimationDirection.left);
	}

	castRight(): void {
		this.resolveAnimation(Animation.cast, AnimationDirection.right);
	}

	castUp(): void {
		this.resolveAnimation(Animation.cast, AnimationDirection.up);
	}

	castDown(): void {
		this.resolveAnimation(Animation.cast, AnimationDirection.down);
	}

	shootLeft(): void {
		this.resolveAnimation(Animation.shoot, AnimationDirection.left);
	}

	shootRight(): void {
		this.resolveAnimation(Animation.shoot, AnimationDirection.right);
	}

	shootUp(): void {
		this.resolveAnimation(Animation.shoot, AnimationDirection.up);
	}

	shootDown(): void {
		this.resolveAnimation(Animation.shoot, AnimationDirection.down);
	}

	death(): void {
		this.resolveAnimation(Animation.death, AnimationDirection.down);
	}

	private resolveAnimation(animation: Animation, direction: AnimationDirection): void {
		if (this.currentAnimatedSprites[0].playing) {
			return;
		}

		for (let i = 0; i < this.currentAnimatedSprites.length; i++) {
			let texture: Texture;
			let textures: Array<Texture>;
			texture = this.bodyAnimationModel[animation].idle[direction][i].texture;
			textures = this.bodyAnimationModel[animation].animation[direction][i].textures as Array<Texture>;
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
