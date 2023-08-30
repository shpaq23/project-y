import { LPCDictionary } from '../../LPC/dictionaries/LPCDictionary';
import { LPCGender } from '../../LPC/enums/body/LPCGender';
import { LPCRanged } from '../../LPC/enums/equipment/weapon/LPCRanged';
import { LPCWeapon } from '../../LPC/enums/equipment/weapon/LPCWeapon';
import { LPCWeaponStrings } from '../../LPC/enums/equipment/weapon/LPCWeaponStrings';

export class CharacterEquipmentLook {
  constructor(private readonly weapon: LPCWeapon) {}

  getQuiver(): string | undefined {
    if (Object.values(LPCRanged).includes(this.weapon as LPCRanged)) {
      return LPCDictionary.quiver;
    }
    return undefined;
  }

  getArrow(): string | undefined {
    if (Object.values(LPCRanged).includes(this.weapon as LPCRanged)) {
      return LPCDictionary.arrow;
    }
    return undefined;
  }

  getWeapon(gender: LPCGender): LPCWeaponStrings {
    return LPCDictionary.weapon[gender][this.weapon]!;
  }
}
