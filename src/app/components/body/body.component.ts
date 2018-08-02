import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {

    state = true;

    phrase: any = {
        author: 'Woody Allen',
        message: 'No es que tenga miedo de morir, pero no quiero estar allí cuando ocurra'
    };

    changeState = () => this.state = !this.state;
}
