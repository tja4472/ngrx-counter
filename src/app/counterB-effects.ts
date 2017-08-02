import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import { Observable } from 'rxjs/Rx';

import * as counterb from './counterB';

@Injectable()
// tslint:disable-next-line:class-name
export class counterB_Effects {
    @Effect({ dispatch: false })
    public decrement$: Observable<Action> = this.actions$
        .ofType(counterb.DECREMENT)
        .do(() => {
            console.log('counterB_Effects:DecrementAction');
        });

    @Effect({ dispatch: false })
    public increment$: Observable<Action> = this.actions$
        .ofType(counterb.INCREMENT)
        .do(() => {
            console.log('counterB_Effects:IncrementAction');
        });

    @Effect({ dispatch: false })
    public reset$: Observable<Action> = this.actions$
        .ofType(counterb.RESET)
        .do(() => {
            console.log('counterB_Effects:ResetAction');
        });
    constructor(private actions$: Actions) { }
}
