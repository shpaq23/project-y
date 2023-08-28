export interface LPCWeaponStrings {
	universal?: {
		normal: string;
		behind?: string;
	};

	walk?: {
		size: number;
		normal: string;
		behind?: string;
	}

	slash?: {
		size: number;
		normal: string;
		behind?: string
	}

	thrust?: {
		size: number;
		normal: string;
		behind?: string;
	}
}

export const longSword: LPCWeaponStrings = {
	universal: {
		normal: 'assets/lpc/weapon/sword/longsword/longsword.png',
		behind: 'assets/lpc/weapon/sword/longsword/universal_behind/longsword.png'
	},

	slash: {
		size: 192,
		normal: 'assets/lpc/weapon/sword/longsword/attack_slash/longsword.png',
		behind: 'assets/lpc/weapon/sword/longsword/attack_slash/behind/longsword.png'
	},

	thrust: {
		size: 192,
		normal: 'assets/lpc/weapon/sword/longsword/attack_thrust/longsword.png',
		behind: 'assets/lpc/weapon/sword/longsword/attack_thrust/behind/longsword.png'
	}
}

export const katana: LPCWeaponStrings = {
	walk: {
		size: 128,
		normal: 'assets/lpc/weapon/sword/katana/walk/katana.png',
		behind: 'assets/lpc/weapon/sword/katana/walk/behind/katana.png'
	},

	slash: {
		size: 128,
		normal: 'assets/lpc/weapon/sword/katana/slash/katana.png',
		behind: 'assets/lpc/weapon/sword/katana/slash/behind/katana.png'
	}
}
