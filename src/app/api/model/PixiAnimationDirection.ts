import { animate } from '@angular/animations';
import { AnimatedSprite, Texture } from 'pixi.js';

export class PixiAnimationDirection {

	private readonly ANIMATION_SPEED = 0.2;
	private readonly ANIMATION_SCALE = 2.0;
	private readonly ANIMATION_Z_INDEX = 10;

	constructor(
		private readonly left: Array<Texture>,
		private readonly right: Array<Texture>,
		private readonly up: Array<Texture>,
		private readonly down: Array<Texture>
	) {
	}

	getLeftAnimatedSprite(): AnimatedSprite {
		const animatedSprite = new AnimatedSprite(this.left);
		animatedSprite.scale.x = this.ANIMATION_SCALE;
		animatedSprite.scale.y = this.ANIMATION_SCALE;
		animatedSprite.zIndex = this.ANIMATION_Z_INDEX;
		animatedSprite.animationSpeed = this.ANIMATION_SPEED;
		return animatedSprite;
	}

	getRightAnimatedSprite(): AnimatedSprite {
		const animatedSprite = new AnimatedSprite(this.right);
		animatedSprite.scale.x = this.ANIMATION_SCALE;
		animatedSprite.scale.y = this.ANIMATION_SCALE;
		animatedSprite.zIndex = this.ANIMATION_Z_INDEX;
		animatedSprite.animationSpeed = this.ANIMATION_SPEED;
		return animatedSprite;
	}

	getUpAnimatedSprite(): AnimatedSprite {
		const animatedSprite = new AnimatedSprite(this.up);
		animatedSprite.scale.x = this.ANIMATION_SCALE;
		animatedSprite.scale.y = this.ANIMATION_SCALE;
		animatedSprite.zIndex = this.ANIMATION_Z_INDEX;
		animatedSprite.animationSpeed = this.ANIMATION_SPEED;
		return animatedSprite;
	}

	getDownAnimatedSprite(): AnimatedSprite {
		const animatedSprite = new AnimatedSprite(this.down);
		animatedSprite.scale.x = this.ANIMATION_SCALE;
		animatedSprite.scale.y = this.ANIMATION_SCALE;
		animatedSprite.zIndex = this.ANIMATION_Z_INDEX;
		animatedSprite.animationSpeed = this.ANIMATION_SPEED;
		return animatedSprite;
	}
}
