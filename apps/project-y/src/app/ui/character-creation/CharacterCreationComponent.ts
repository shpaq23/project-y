import { ChangeDetectionStrategy, Component } from '@angular/core';
import { LPCBodyColor, LPCEars, LPCEyes, LPCHair, LPCHairColor, LPCNose } from '../../api/model/LPC/enums';

@Component({
	selector: 'character-creation',
	templateUrl: './CharacterCreationComponent.html',
	styleUrls: ['./CharacterCreationComponent.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class CharacterCreationComponent {

	readonly bodyColor: LPCBodyColor = LPCBodyColor.light;

	// private selectedSword: LPCSword | undefined;
	//
	// onSelectChange(event: string): void {
	// 	this.selectedSword = event as LPCSword;
	// 	console.log(this.selectedSword);
	// }
}
