import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as CounterA from '../../app/counter.actions';
import * as CounterB from '../../app/counterB';
import * as CounterFeature from '../../app/feature-counter';
import * as fromFeatureReducers from '../../app/feature-reducers';
import * as fromRootReducers from '../../app/root-reducers';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public counterA: Observable<number>;
  public counterB: Observable<number>;

  public counterFeature: Observable<number>;

  constructor(
    // private storeFeatureA: Store<fromFeatureReducers.IState>,
    private store: Store<fromRootReducers.IRootState>,

    public navCtrl: NavController) {
    // this.counter = store.select('counter');
    this.counterA = store.select((s) => s.counterA);
    this.counterB = store.select(fromRootReducers.getCounterB);
    this.counterFeature = store.select(fromFeatureReducers.getCounter);
    // this.counterFeature = this.storeFeatureA.select(fromFeatureReducers.getCounter);
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

  public incrementFeature() {
    this.store.dispatch(new CounterFeature.IncrementAction());
  }

  public decrementFeature() {
    this.store.dispatch(new CounterFeature.DecrementAction());
  }

  public resetFeature() {
    this.store.dispatch(new CounterFeature.ResetActions(3));
  }
}
