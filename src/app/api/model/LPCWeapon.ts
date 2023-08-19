export interface LPCWeapon {
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

export const longSword: LPCWeapon = {
	universal: {
		normal: 'assets/weapon/sword/longsword/longsword.png',
		behind: 'assets/weapon/sword/longsword/universal_behind/longsword.png'
	},

	slash: {
		size: 192,
		normal: 'assets/weapon/sword/longsword/attack_slash/longsword.png',
		behind: 'assets/weapon/sword/longsword/attack_slash/behind/longsword.png'
	},

	thrust: {
		size: 192,
		normal: 'assets/weapon/sword/longsword/attack_thrust/longsword.png',
		behind: 'assets/weapon/sword/longsword/attack_thrust/behind/longsword.png'
	}
}

export const katana: LPCWeapon = {
	walk: {
		size: 128,
		normal: 'assets/weapon/sword/katana/walk/katana.png',
		behind: 'assets/weapon/sword/katana/walk/behind/katana.png'
	},

	slash: {
		size: 128,
		normal: 'assets/weapon/sword/katana/slash/katana.png',
		behind: 'assets/weapon/sword/katana/slash/behind/katana.png'
	}
}
