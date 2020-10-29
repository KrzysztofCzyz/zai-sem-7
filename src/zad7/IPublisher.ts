import {Autor} from "./autor";

export interface IPublisher {
    publish(data: Autor[]): void;
}