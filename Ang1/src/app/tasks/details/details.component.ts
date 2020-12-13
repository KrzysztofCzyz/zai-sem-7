import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Task } from 'src/app/shared/model/task';

@Component({
    selector:"app-details",
    templateUrl:'details.component.html'
})
export class DetailsComponent
{
    @Input() task:Task;  
    
    @Output() closed:EventEmitter<any>;
    
    constructor(){
        this.closed = new EventEmitter<any>();
    }

    close() {
        this.closed.emit();
    }    
    
}