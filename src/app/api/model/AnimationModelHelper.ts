import { AnimatedSprite, Sprite } from 'pixi.js';
import { BasicModelAnimation } from './animation/BasicModelAnimation';
import { BasicModelSimpleAnimation } from './animation/BasicModelSimpleAnimation';
import { WeaponModelAnimation } from './animation/WeaponModelAnimation';
import { CharacterBasicAnimation } from './CharacterBasicAnimation';
import { CharacterWeaponAnimation } from './CharacterWeaponAnimation';
import { PixiAnimation } from './PixiAnimation';

type SpritesType = {
	idle: Array<Sprite>;
	animation: Array<AnimatedSprite>;
}

export class AnimationModelHelper {

	getBasicModelAnimation(basic: CharacterBasicAnimation): BasicModelAnimation {
		return this.getBasicAnimation(Object.values(basic)) as BasicModelAnimation;
	}

	getWeaponModelAnimation(weapon: CharacterWeaponAnimation): WeaponModelAnimation {
		const weaponModelAnimation: WeaponModelAnimation = {};
		if (weapon.universal) {
			weaponModelAnimation.universal = {
				normal: this.getBasicAnimation(weapon.universal.normal) as BasicModelSimpleAnimation
			};
			if (weapon.universal.behind) {
				weaponModelAnimation.universal.behind = this.getBasicAnimation(weapon.universal.behind) as BasicModelSimpleAnimation;
			}
		}

		if (weapon.walk) {
			weaponModelAnimation.walk = {
				normal: {
					animation: {
						left: weapon.walk.normal.getLeftAnimatedSprite(),
						right: weapon.walk.normal.getRightAnimatedSprite(),
						up: weapon.walk.normal.getUpAnimatedSprite(),
						down: weapon.walk.normal.getDownAnimatedSprite()
					},
					idle: {
						left: weapon.walk.normal.getLeftIdleSprite(),
						right: weapon.walk.normal.getRightIdleSprite(),
						up: weapon.walk.normal.getUpIdleSprite(),
						down: weapon.walk.normal.getDownIdleSprite()
					}
				}
			};
			if (weapon.walk.behind) {
				weaponModelAnimation.walk.behind = {
					animation: {
						left: weapon.walk.behind.getLeftAnimatedSprite(),
						right: weapon.walk.behind.getRightAnimatedSprite(),
						up: weapon.walk.behind.getUpAnimatedSprite(),
						down: weapon.walk.behind.getDownAnimatedSprite()
					},
					idle: {
						left: weapon.walk.behind.getLeftIdleSprite(),
						right: weapon.walk.behind.getRightIdleSprite(),
						up: weapon.walk.behind.getUpIdleSprite(),
						down: weapon.walk.behind.getDownIdleSprite()
					}
				};
			}
		}

		if (weapon.slash) {
			weaponModelAnimation.slash = {
				normal: {
					animation: {
						left: weapon.slash.normal.getLeftAnimatedSprite(),
						right: weapon.slash.normal.getRightAnimatedSprite(),
						up: weapon.slash.normal.getUpAnimatedSprite(),
						down: weapon.slash.normal.getDownAnimatedSprite()
					},
					idle: {
						left: weapon.slash.normal.getLeftIdleSprite(),
						right: weapon.slash.normal.getRightIdleSprite(),
						up: weapon.slash.normal.getUpIdleSprite(),
						down: weapon.slash.normal.getDownIdleSprite()
					}
				}
			};
			if (weapon.slash.behind) {
				weaponModelAnimation.slash.behind = {
					animation: {
						left: weapon.slash.behind.getLeftAnimatedSprite(),
						right: weapon.slash.behind.getRightAnimatedSprite(),
						up: weapon.slash.behind.getUpAnimatedSprite(),
						down: weapon.slash.behind.getDownAnimatedSprite()
					},
					idle: {
						left: weapon.slash.behind.getLeftIdleSprite(),
						right: weapon.slash.behind.getRightIdleSprite(),
						up: weapon.slash.behind.getUpIdleSprite(),
						down: weapon.slash.behind.getDownIdleSprite()
					}
				};
			}
		}

		if (weapon.thrust) {
			weaponModelAnimation.thrust = {
				normal: {
					animation: {
						left: weapon.thrust.normal.getLeftAnimatedSprite(),
						right: weapon.thrust.normal.getRightAnimatedSprite(),
						up: weapon.thrust.normal.getUpAnimatedSprite(),
						down: weapon.thrust.normal.getDownAnimatedSprite()
					},
					idle: {
						left: weapon.thrust.normal.getLeftIdleSprite(),
						right: weapon.thrust.normal.getRightIdleSprite(),
						up: weapon.thrust.normal.getUpIdleSprite(),
						down: weapon.thrust.normal.getDownIdleSprite()
					}
				}
			};
			if (weapon.thrust.behind) {
				weaponModelAnimation.thrust.behind = {
					animation: {
						left: weapon.thrust.behind.getLeftAnimatedSprite(),
						right: weapon.thrust.behind.getRightAnimatedSprite(),
						up: weapon.thrust.behind.getUpAnimatedSprite(),
						down: weapon.thrust.behind.getDownAnimatedSprite()
					},
					idle: {
						left: weapon.thrust.behind.getLeftIdleSprite(),
						right: weapon.thrust.behind.getRightIdleSprite(),
						up: weapon.thrust.behind.getUpIdleSprite(),
						down: weapon.thrust.behind.getDownIdleSprite()
					}
				};
			}
		}
		return weaponModelAnimation;
	}

	private getBasicAnimation(animations: Array<PixiAnimation> | PixiAnimation): BasicModelAnimation | BasicModelSimpleAnimation {
		const isArray = Array.isArray(animations);
		if (!Array.isArray(animations)) {
			animations = [animations];
		}
		const walkLeft = this.getWalkLeftSprites(animations);
		const walkRight = this.getWalkRightSprites(animations);
		const walkUp = this.getWalkUpSprites(animations);
		const walkDown = this.getWalkDownSprites(animations);

		const slashLeft = this.getSlashLeftSprites(animations);
		const slashRight = this.getSlashRightSprites(animations);
		const slashUp = this.getSlashUpSprites(animations);
		const slashDown = this.getSlashDownSprites(animations);

		const thrustLeft = this.getThrustLeftSprites(animations);
		const thrustRight = this.getThrustRightSprites(animations);
		const thrustUp = this.getThrustUpSprites(animations);
		const thrustDown = this.getThrustDownSprites(animations);

		if (isArray) {
			return {
				walk: {
					animation: {
						left: walkLeft.animation,
						right: walkRight.animation,
						up: walkUp.animation,
						down: walkDown.animation
					},
					idle: {
						left: walkLeft.idle,
						right: walkRight.idle,
						up: walkUp.idle,
						down: walkDown.idle
					}
				},
				slash: {
					animation: {
						left: slashLeft.animation,
						right: slashRight.animation,
						up: slashUp.animation,
						down: slashDown.animation
					},
					idle: {
						left: slashLeft.idle,
						right: slashRight.idle,
						up: slashUp.idle,
						down: slashDown.idle
					}
				},
				thrust: {
					animation: {
						left: thrustLeft.animation,
						right: thrustRight.animation,
						up: thrustUp.animation,
						down: thrustDown.animation
					},
					idle: {
						left: thrustLeft.idle,
						right: thrustRight.idle,
						up: thrustUp.idle,
						down: thrustDown.idle
					}
				}
			};
		} else {
			return {
				walk: {
					animation: {
						left: walkLeft.animation[0],
						right: walkRight.animation[0],
						up: walkUp.animation[0],
						down: walkDown.animation[0]
					},
					idle: {
						left: walkLeft.idle[0],
						right: walkRight.idle[0],
						up: walkUp.idle[0],
						down: walkDown.idle[0]
					}
				},
				slash: {
					animation: {
						left: slashLeft.animation[0],
						right: slashRight.animation[0],
						up: slashUp.animation[0],
						down: slashDown.animation[0]
					},
					idle: {
						left: slashLeft.idle[0],
						right: slashRight.idle[0],
						up: slashUp.idle[0],
						down: slashDown.idle[0]
					}
				},
				thrust: {
					animation: {
						left: thrustLeft.animation[0],
						right: thrustRight.animation[0],
						up: thrustUp.animation[0],
						down: thrustDown.animation[0]
					},
					idle: {
						left: thrustLeft.idle[0],
						right: thrustRight.idle[0],
						up: thrustUp.idle[0],
						down: thrustDown.idle[0]
					}
				}
			};
		}


	}

	private getWalkLeftSprites(animations: Array<PixiAnimation>): SpritesType {
		const animatedSprites: Array<AnimatedSprite> = [];
		const sprites: Array<Sprite> = [];
		animations.forEach(((animation: PixiAnimation) => {
			animatedSprites.push(animation.getWalk().getLeftAnimatedSprite());
			sprites.push(animation.getWalk().getLeftIdleSprite());
		}));
		return { animation: animatedSprites, idle: sprites };
	}

	private getWalkRightSprites(animations: Array<PixiAnimation>): SpritesType {
		const animatedSprites: Array<AnimatedSprite> = [];
		const sprites: Array<Sprite> = [];
		animations.forEach(((animation: PixiAnimation) => {
			animatedSprites.push(animation.getWalk().getRightAnimatedSprite());
			sprites.push(animation.getWalk().getRightIdleSprite());
		}));
		return { animation: animatedSprites, idle: sprites };
	}

	private getWalkUpSprites(animations: Array<PixiAnimation>): SpritesType {
		const animatedSprites: Array<AnimatedSprite> = [];
		const sprites: Array<Sprite> = [];
		animations.forEach(((animation: PixiAnimation) => {
			animatedSprites.push(animation.getWalk().getUpAnimatedSprite());
			sprites.push(animation.getWalk().getUpIdleSprite());
		}));
		return { animation: animatedSprites, idle: sprites };
	}

	private getWalkDownSprites(animations: Array<PixiAnimation>): SpritesType {
		const animatedSprites: Array<AnimatedSprite> = [];
		const sprites: Array<Sprite> = [];
		animations.forEach(((animation: PixiAnimation) => {
			animatedSprites.push(animation.getWalk().getDownAnimatedSprite());
			sprites.push(animation.getWalk().getDownIdleSprite());
		}));
		return { animation: animatedSprites, idle: sprites };
	}

	private getSlashLeftSprites(animations: Array<PixiAnimation>): SpritesType {
		const animatedSprites: Array<AnimatedSprite> = [];
		const sprites: Array<Sprite> = [];
		animations.forEach(((animation: PixiAnimation) => {
			animatedSprites.push(animation.getSlash().getLeftAnimatedSprite());
			sprites.push(animation.getSlash().getLeftIdleSprite());
		}));
		return { animation: animatedSprites, idle: sprites };
	}

	private getSlashRightSprites(animations: Array<PixiAnimation>): SpritesType {
		const animatedSprites: Array<AnimatedSprite> = [];
		const sprites: Array<Sprite> = [];
		animations.forEach(((animation: PixiAnimation) => {
			animatedSprites.push(animation.getSlash().getRightAnimatedSprite());
			sprites.push(animation.getSlash().getRightIdleSprite());
		}));
		return { animation: animatedSprites, idle: sprites };
	}

	private getSlashUpSprites(animations: Array<PixiAnimation>): SpritesType {
		const animatedSprites: Array<AnimatedSprite> = [];
		const sprites: Array<Sprite> = [];
		animations.forEach(((animation: PixiAnimation) => {
			animatedSprites.push(animation.getSlash().getUpAnimatedSprite());
			sprites.push(animation.getSlash().getUpIdleSprite());
		}));
		return { animation: animatedSprites, idle: sprites };
	}

	private getSlashDownSprites(animations: Array<PixiAnimation>): SpritesType {
		const animatedSprites: Array<AnimatedSprite> = [];
		const sprites: Array<Sprite> = [];
		animations.forEach(((animation: PixiAnimation) => {
			animatedSprites.push(animation.getSlash().getDownAnimatedSprite());
			sprites.push(animation.getSlash().getDownIdleSprite());
		}));
		return { animation: animatedSprites, idle: sprites };
	}

	private getThrustLeftSprites(animations: Array<PixiAnimation>): SpritesType {
		const animatedSprites: Array<AnimatedSprite> = [];
		const sprites: Array<Sprite> = [];
		animations.forEach(((animation: PixiAnimation) => {
			animatedSprites.push(animation.getThrust().getLeftAnimatedSprite());
			sprites.push(animation.getThrust().getLeftIdleSprite());
		}));
		return { animation: animatedSprites, idle: sprites };
	}

	private getThrustRightSprites(animations: Array<PixiAnimation>): SpritesType {
		const animatedSprites: Array<AnimatedSprite> = [];
		const sprites: Array<Sprite> = [];
		animations.forEach(((animation: PixiAnimation) => {
			animatedSprites.push(animation.getThrust().getRightAnimatedSprite());
			sprites.push(animation.getThrust().getRightIdleSprite());
		}));
		return { animation: animatedSprites, idle: sprites };
	}

	private getThrustUpSprites(animations: Array<PixiAnimation>): SpritesType {
		const animatedSprites: Array<AnimatedSprite> = [];
		const sprites: Array<Sprite> = [];
		animations.forEach(((animation: PixiAnimation) => {
			animatedSprites.push(animation.getThrust().getUpAnimatedSprite());
			sprites.push(animation.getThrust().getUpIdleSprite());
		}));
		return { animation: animatedSprites, idle: sprites };
	}

	private getThrustDownSprites(animations: Array<PixiAnimation>): SpritesType {
		const animatedSprites: Array<AnimatedSprite> = [];
		const sprites: Array<Sprite> = [];
		animations.forEach(((animation: PixiAnimation) => {
			animatedSprites.push(animation.getThrust().getDownAnimatedSprite());
			sprites.push(animation.getThrust().getDownIdleSprite());
		}));
		return { animation: animatedSprites, idle: sprites };
	}

}