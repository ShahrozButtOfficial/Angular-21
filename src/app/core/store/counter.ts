import { Injectable,signal} from '@angular/core';

@Injectable({
    providedIn: 'root',
})

export class CounterStore {
    count = signal<number>(0);

    increment() {
        this.count.set(this.count() + 1);
    }

    decrement(){
        this.count.set(this.count() - 1);
    }

    reset(){
        this.count.set(0);
    }
}