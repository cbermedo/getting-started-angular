import { Component } from '@angular/core';

@Component({
    selector: 'app-body',
    templateUrl: './body.component.html'
})
export class BodyComponent {

    show = true;

    phrase: any = {
        author: 'Woody Allen',
        message: 'No es que tenga miedo de morir, pero no quiero estar allí cuando ocurra'
    };

    authors: string[] = ['Pablo Neruda', 'Gabriela Mistral', 'Nicanor Parra', 'Vicente Huidobro'];

    changeState = () => this.show = !this.show;

}
