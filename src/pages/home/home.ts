import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';
import * as Counter from '../../app/counter.actions';
interface IAppState {
  counter: number;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  public counter: Observable<number>;

  constructor(
    private store: Store<IAppState>,
    public navCtrl: NavController) {
    // this.counter = store.select('counter');
    this.counter = store.select((s) => s.counter);
  }

  public increment() {
    this.store.dispatch(new Counter.Increment());
  }

  public decrement() {
    this.store.dispatch(new Counter.Decrement());
  }

  public reset() {
    this.store.dispatch(new Counter.Reset(3));
  }
}
