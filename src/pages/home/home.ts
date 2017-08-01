import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as CounterA from '../../app/counter.actions';
import * as CounterB from '../../app/counterB';
import * as fromRootReducers from '../../app/root-reducers';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public counterA: Observable<number>;
  public counterB: Observable<number>;

  constructor(
    private store: Store<fromRootReducers.IRootState>,
    public navCtrl: NavController) {
    // this.counter = store.select('counter');
    this.counterA = store.select((s) => s.counterA);
    this.counterB = store.select(fromRootReducers.getCounterB);
  }

  public incrementA() {
    this.store.dispatch(new CounterA.IncrementAction());
  }

  public decrementA() {
    this.store.dispatch(new CounterA.DecrementAction());
  }

  public resetA() {
    this.store.dispatch(new CounterA.ResetAction(3));
  }

  public incrementB() {
    this.store.dispatch(new CounterB.IncrementAction());
  }

  public decrementB() {
    this.store.dispatch(new CounterB.DecrementAction());
  }

  public resetB() {
    this.store.dispatch(new CounterB.ResetActions(3));
  }
}
