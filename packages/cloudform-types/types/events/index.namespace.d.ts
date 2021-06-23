import Connection_ from './connection';
import EventBusPolicy_ from './eventBusPolicy';
import ApiDestination_ from './apiDestination';
import Rule_ from './rule';
import Archive_ from './archive';
import EventBus_ from './eventBus';
export declare namespace Events {
    const Connection: typeof Connection_;
    const EventBusPolicy: typeof EventBusPolicy_;
    const ApiDestination: typeof ApiDestination_;
    const Rule: typeof Rule_;
    const Archive: typeof Archive_;
    const EventBus: typeof EventBus_;
    type Connection = Connection_;
    type EventBusPolicy = EventBusPolicy_;
    type ApiDestination = ApiDestination_;
    type Rule = Rule_;
    type Archive = Archive_;
    type EventBus = EventBus_;
}
