import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

export class Single<T> extends Observable<T> {

	protected constructor(
		subscribe?
	) {
		super(subscribe);
	}

	static from<T>(source$: Observable<T>): Single<T> {
		const single$ = new Single<T>();
		single$.source = source$.pipe(take(1));
		return single$;
	}

}
