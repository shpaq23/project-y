import { PixiAnimationDirection } from './PixiAnimationDirection';

export class PixiAnimation {

	constructor(
		private readonly walk: PixiAnimationDirection,
		private readonly slash: PixiAnimationDirection,
		private readonly thrust: PixiAnimationDirection
	) {

	}

	getWalk(): PixiAnimationDirection {
		return this.walk;
	}

	getSlash(): PixiAnimationDirection {
		return this.slash;
	}

	getThrust(): PixiAnimationDirection {
		return this.thrust;
	}
}
