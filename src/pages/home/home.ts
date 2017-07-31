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
  templateUrl: 'home.html'
})
export class HomePage {
  counter: Observable<number>;

  constructor(
    private store: Store<IAppState>,
    public navCtrl: NavController) {
    // this.counter = store.select('counter');
    this.counter = store.select((s) => s.counter);
  }

  increment() {
    this.store.dispatch(new Counter.Increment());
  }

  decrement() {
    this.store.dispatch(new Counter.Decrement());
  }

  reset() {
    this.store.dispatch(new Counter.Reset(3));
  }
}
