import { Injectable } from '@angular/core';
import { Application, BaseTexture, Rectangle, Texture } from 'pixi.js';
import { CharacterWeaponAnimation } from './CharacterWeaponAnimation';
import { longSword } from './LPCWeapon';
import { ModelController } from './ModelController';
import { PixiAnimation } from './PixiAnimation';
import { PixiAnimationDirection } from './PixiAnimationDirection';

@Injectable()
export class PixiAnimationLoader {

	private readonly FRAME_SIZE = 64;

	private readonly CAST_FRAMES = 7;
	private readonly CAST_FRAMES_START = 0;

	private readonly THRUST_FRAMES = 8;
	private readonly THRUST_FRAMES_START = 4;

	private readonly WALK_FRAMES = 9;
	private readonly WALK_FRAMES_START = 8;

	private readonly SLASH_FRAMES = 6;
	private readonly SLASH_FRAMES_START = 12;

	private readonly SHOOT_FRAMES = 13;
	private readonly SHOOT_FRAMES_START = 16;

	private readonly DEAD_FRAMES = 6;
	private readonly DEAD_FRAMES_START = 20;


	getCharacterAnimation(game: Application): ModelController {
		const bodyUrl: string = 'assets/body/bodies/male/universal.png';
		const headUrl: string = 'assets/head/heads/human_male/universal.png';


		const bodyAnimation = this.getAnimation(bodyUrl);
		const headAnimation = this.getAnimation(headUrl);
		const bowAnimation = this.getBowAnimation();
		const weaponAnimation = this.getWeaponAnimation();
		const characterBasicAnimation = { body: bodyAnimation, head: headAnimation };
		return new ModelController(game, characterBasicAnimation, this.getWeaponAnimation2(), bowAnimation, weaponAnimation);

	}

	private getWeaponAnimation2(): CharacterWeaponAnimation {
		const weapon = longSword;
		const weaponAnimation: CharacterWeaponAnimation = {};
		if (weapon.universal) {
			weaponAnimation.universal = {
				normal: this.getAnimation(weapon.universal.normal)
			};
			if (weapon.universal.behind) {
				weaponAnimation.universal.behind = this.getAnimation(weapon.universal.behind, true);
			}
		}

		if (weapon.walk) {
			weaponAnimation.walk = {
				normal: this.getWalkAnimation(weapon.walk.normal, weapon.walk.size),
			};
			if (weapon.walk.behind) {
				weaponAnimation.walk.behind = this.getWalkAnimation(weapon.walk.behind, weapon.walk.size, true);
			}
		}

		if (weapon.slash) {
			weaponAnimation.slash = {
				normal: this.getSlashAnimation(weapon.slash.normal, weapon.slash.size),
			};
			if (weapon.slash.behind) {
				weaponAnimation.slash.behind = this.getSlashAnimation(weapon.slash.behind, weapon.slash.size, true);
			}
		}

		if (weapon.thrust) {
			weaponAnimation.thrust = {
				normal: this.getThrustAnimation(weapon.thrust.normal, weapon.thrust.size),
			};
			if (weapon.thrust.behind) {
				weaponAnimation.thrust.behind = this.getThrustAnimation(weapon.thrust.behind, weapon.thrust.size, true);
			}
		}

		return weaponAnimation;
	}


	private getWeaponAnimation(): PixiAnimationDirection {
		const weaponSlashBehindUrl = 'assets/weapon/sword/glowsword/attack_slash/behind/red.png';
		const weaponSlash = 'assets/weapon/sword/glowsword/attack_slash/red.png';
		const sheetSlashBehind = BaseTexture.from(weaponSlashBehindUrl);
		const sheetSlash = BaseTexture.from(weaponSlash);
		const frameWidth = 192;
		const frameHeight = 192;

		const slashUp: Array<Texture> = [];
		const slashLeft: Array<Texture> = [];
		const slashDown: Array<Texture> = [];
		const slashRight: Array<Texture> = [];

		for (let x = 0; x < this.SLASH_FRAMES; x++) {
			slashUp.push(new Texture(sheetSlash, new Rectangle(x * frameWidth, 0 * frameHeight, frameWidth, frameHeight)));
			slashLeft.push(new Texture(sheetSlash, new Rectangle(x * frameWidth, 1 * frameHeight, frameWidth, frameHeight)));
			slashDown.push(new Texture(sheetSlash, new Rectangle(x * frameWidth, 2 * frameHeight, frameWidth, frameHeight)));
			slashRight.push(new Texture(sheetSlash, new Rectangle(x * frameWidth, 3 * frameHeight, frameWidth, frameHeight)));
		}

		const leftIdle = slashLeft[0];
		const leftAnimation = slashLeft.slice(1, slashLeft.length);

		const slashDirection = new PixiAnimationDirection(slashLeft, slashRight, slashUp, slashDown);
		return slashDirection;
	}

	private getBowAnimation(): PixiAnimationDirection {
		const bowWalkBackgroundUrl = 'assets/weapon/ranged/bow/recurve/walk/background/recurve.png';
		const bowWalkForegroundUrl = 'assets/weapon/ranged/bow/recurve/walk/foreground/recurve.png';
		const sheetForeGround = BaseTexture.from(bowWalkForegroundUrl);
		const sheetBackGround = BaseTexture.from(bowWalkBackgroundUrl);

		const frameWidth = 128;
		const frameHeight = 128;
		const walkUp: Array<Texture> = [];
		const walkLeft: Array<Texture> = [];
		const walkDown: Array<Texture> = [];
		const walkRight: Array<Texture> = [];

		for (let x = 0; x < this.WALK_FRAMES; x++) {
			walkUp.push(new Texture(sheetBackGround, new Rectangle(x * frameWidth, 0 * frameHeight, frameWidth, frameHeight)));
			walkLeft.push(new Texture(sheetBackGround, new Rectangle(x * frameWidth, 1 * frameHeight, frameWidth, frameHeight)));
			walkDown.push(new Texture(sheetForeGround, new Rectangle(x * frameWidth, 0 * frameHeight, frameWidth, frameHeight)));
			walkRight.push(new Texture(sheetBackGround, new Rectangle(x * frameWidth, 3 * frameHeight, frameWidth, frameHeight)));
		}

		return new PixiAnimationDirection(walkLeft, walkRight, walkUp, walkDown);
	}


	private getAnimation(url: string, behind?: boolean): PixiAnimation {
		const walkAnimation = this.getWalkAnimation(url, undefined, behind);
		const slashAnimation = this.getSlashAnimation(url, undefined, behind);
		const thrustAnimation = this.getThrustAnimation(url, undefined, behind);
		return new PixiAnimation(walkAnimation, slashAnimation, thrustAnimation);
	}

	private getWalkAnimation(url: string, size?: number, isBehind?: boolean): PixiAnimationDirection {
		const sheet = BaseTexture.from(url);
		const walkUp: Array<Texture> = [];
		const walkLeft: Array<Texture> = [];
		const walkDown: Array<Texture> = [];
		const walkRight: Array<Texture> = [];
		const frameSize = size ?? this.FRAME_SIZE;
		const startFrame = size ? 0 : this.WALK_FRAMES_START;

		for (let x = 0; x < this.WALK_FRAMES; x++) {
			walkUp.push(new Texture(sheet, new Rectangle(x * frameSize, startFrame * frameSize, frameSize, frameSize)));
			walkLeft.push(new Texture(sheet, new Rectangle(x * frameSize, (startFrame + 1) * frameSize, frameSize, frameSize)));
			walkDown.push(new Texture(sheet, new Rectangle(x * frameSize, (startFrame + 2) * frameSize, frameSize, frameSize)));
			walkRight.push(new Texture(sheet, new Rectangle(x * frameSize, (startFrame + 3) * frameSize, frameSize, frameSize)));
		}


		return new PixiAnimationDirection(walkLeft, walkRight, walkUp, walkDown, size, isBehind);
	}

	private getSlashAnimation(url: string, size?: number, isBehind?: boolean): PixiAnimationDirection {
		const sheet = BaseTexture.from(url);
		const slashUp: Array<Texture> = [];
		const slashLeft: Array<Texture> = [];
		const slashDown: Array<Texture> = [];
		const slashRight: Array<Texture> = [];
		const frameSize = size ?? this.FRAME_SIZE;
		const startFrame = size ? 0 : this.SLASH_FRAMES_START;

		for (let x = 0; x < this.SLASH_FRAMES; x++) {
			slashUp.push(new Texture(sheet, new Rectangle(x * frameSize, startFrame * frameSize, frameSize, frameSize)));
			slashLeft.push(new Texture(sheet, new Rectangle(x * frameSize, (startFrame + 1) * frameSize, frameSize, frameSize)));
			slashDown.push(new Texture(sheet, new Rectangle(x * frameSize, (startFrame + 2) * frameSize, frameSize, frameSize)));
			slashRight.push(new Texture(sheet, new Rectangle(x * frameSize, (startFrame + 3) * frameSize, frameSize, frameSize)));
		}

		return new PixiAnimationDirection(slashLeft, slashRight, slashUp, slashDown, size, isBehind);
	}

	private getThrustAnimation(url: string, size?: number, isBehind?: boolean): PixiAnimationDirection {
		const sheet = BaseTexture.from(url);
		const thrustUp: Array<Texture> = [];
		const thrustLeft: Array<Texture> = [];
		const thrustDown: Array<Texture> = [];
		const thrustRight: Array<Texture> = [];
		const frameSize = size ?? this.FRAME_SIZE;
		const startFrame = size ? 0 : this.THRUST_FRAMES_START;

		for (let x = 0; x < this.THRUST_FRAMES; x++) {
			thrustUp.push(new Texture(sheet, new Rectangle(x * frameSize, startFrame * frameSize, frameSize, frameSize)));
			thrustLeft.push(new Texture(sheet, new Rectangle(x * frameSize, (startFrame + 1) * frameSize, frameSize, frameSize)));
			thrustDown.push(new Texture(sheet, new Rectangle(x * frameSize, (startFrame + 2) * frameSize, frameSize, frameSize)));
			thrustRight.push(new Texture(sheet, new Rectangle(x * frameSize, (startFrame + 3) * frameSize, frameSize, frameSize)));
		}

		return new PixiAnimationDirection(thrustLeft, thrustRight, thrustUp, thrustDown, size, isBehind);
	}
}
