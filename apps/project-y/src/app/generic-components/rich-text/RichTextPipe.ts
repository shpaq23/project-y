import { Pipe } from '@angular/core';
import { RichText } from './RichText';

@Pipe({
	name: 'richTextString',
	standalone: true
})

export class RichTextPipe {

	transform(value: string): RichText {
		return RichText.text(value);
	}
}
