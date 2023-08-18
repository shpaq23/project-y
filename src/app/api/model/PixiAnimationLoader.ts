import { Inject, Injectable } from '@angular/core';
import { Application, BaseTexture, Rectangle, Texture } from 'pixi.js';
import { PixiAnimation } from './PixiAnimation';
import { PixiAnimationDirection } from './PixiAnimationDirection';
import { PixiCharacterAnimation } from './PixiCharacterAnimation';

@Injectable()
export class PixiAnimationLoader {

	private readonly FRAME_WIDTH = 64;
	private readonly FRAME_HEIGHT = 64;

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


	getCharacterAnimation(game: Application): PixiCharacterAnimation {
		const bodyUrl: string = 'assets/body/bodies/male/universal.png';
		const headUrl: string = 'assets/head/heads/human_male/universal.png';

		const bodyAnimation = this.getAnimation(bodyUrl);
		const hedaAnimation = this.getAnimation(headUrl);
		return new PixiCharacterAnimation(bodyAnimation, hedaAnimation, game);

	}


	private getAnimation(url: string): PixiAnimation {
		const walkAnimation = this.getWalkAnimation(url);
		const getSlashAnimation = this.getSlashAnimation(url);
		return new PixiAnimation(walkAnimation, getSlashAnimation);
	}



	private getWalkAnimation(url: string): PixiAnimationDirection {
		const sheet = BaseTexture.from(url);
		const walkUp: Array<Texture> = [];
		const walkLeft: Array<Texture> = [];
		const walkDown: Array<Texture> = [];
		const walkRight: Array<Texture> = [];

			for (let x = 0; x < this.WALK_FRAMES; x++) {
				walkUp.push(new Texture(sheet, new Rectangle(x * this.FRAME_WIDTH, this.WALK_FRAMES_START * this.FRAME_HEIGHT, this.FRAME_WIDTH, this.FRAME_HEIGHT)));
				walkLeft.push(new Texture(sheet, new Rectangle(x * this.FRAME_WIDTH, (this.WALK_FRAMES_START + 1) * this.FRAME_HEIGHT, this.FRAME_WIDTH, this.FRAME_HEIGHT)));
				walkDown.push(new Texture(sheet, new Rectangle(x * this.FRAME_WIDTH, (this.WALK_FRAMES_START + 2) * this.FRAME_HEIGHT, this.FRAME_WIDTH, this.FRAME_HEIGHT)));
				walkRight.push(new Texture(sheet, new Rectangle(x * this.FRAME_WIDTH, (this.WALK_FRAMES_START + 3) * this.FRAME_HEIGHT, this.FRAME_WIDTH, this.FRAME_HEIGHT)));
			}


		return new PixiAnimationDirection(walkLeft, walkRight, walkUp, walkDown);
	}

	private getSlashAnimation(url: string): PixiAnimationDirection {
		const sheet = BaseTexture.from(url);
		const slashUp: Array<Texture> = [];
		const slashLeft: Array<Texture> = [];
		const slashDown: Array<Texture> = [];
		const slashRight: Array<Texture> = [];

		for (let x = 0; x < this.SLASH_FRAMES; x++) {
			slashUp.push(new Texture(sheet, new Rectangle(x * this.FRAME_WIDTH, this.SLASH_FRAMES_START * this.FRAME_HEIGHT, this.FRAME_WIDTH, this.FRAME_HEIGHT)));
			slashLeft.push(new Texture(sheet, new Rectangle(x * this.FRAME_WIDTH, (this.SLASH_FRAMES_START + 1) * this.FRAME_HEIGHT, this.FRAME_WIDTH, this.FRAME_HEIGHT)));
			slashDown.push(new Texture(sheet, new Rectangle(x * this.FRAME_WIDTH, (this.SLASH_FRAMES_START + 2) * this.FRAME_HEIGHT, this.FRAME_WIDTH, this.FRAME_HEIGHT)));
			slashRight.push(new Texture(sheet, new Rectangle(x * this.FRAME_WIDTH, (this.SLASH_FRAMES_START + 3) * this.FRAME_HEIGHT, this.FRAME_WIDTH, this.FRAME_HEIGHT)));
		}

		return new PixiAnimationDirection(slashLeft, slashRight, slashUp, slashDown);
	}
}
