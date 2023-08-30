import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons/faArrowLeft';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons/faArrowRight';
import { ButtonComponent } from '../button/ButtonComponent';

@Component({
	selector: 'selector',
	templateUrl: './SelectorComponent.html',
	styleUrls: ['./SelectorComponent.scss'],
	standalone: true,
	changeDetection: ChangeDetectionStrategy.OnPush,
	imports: [
		ButtonComponent,
		FontAwesomeModule
	]
})
export class SelectorComponent implements OnInit {

	@Input({ required: true })
	options!: Array<string>;

	@Input()
	selectedOption: string | undefined;

	@Output()
	readonly selectedOptionChange = new EventEmitter<string>();

	arrowLeft = faArrowLeft;
	arrowRight = faArrowRight;


	ngOnInit(): void {
		if (!this.selectedOption) {
			this.selectedOption = this.options[0];
		}
	}

	getOptionIndex(): number {
		return this.options.indexOf(this.selectedOption!);
	}

	previousValue(): void {
		const index = this.getOptionIndex();
		this.selectedOption = this.options[index - 1];
		this.selectedOptionChange.emit(this.selectedOption);
	}

	nextValue(): void {
		const index = this.getOptionIndex();
		this.selectedOption = this.options[index + 1];
		this.selectedOptionChange.emit(this.selectedOption);
	}
}


