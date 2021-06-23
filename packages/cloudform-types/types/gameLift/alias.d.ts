import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class RoutingStrategy {
    Message?: Value<string>;
    FleetId?: Value<string>;
    Type: Value<string>;
    constructor(properties: RoutingStrategy);
}
export interface AliasProperties {
    Description?: Value<string>;
    Name: Value<string>;
    RoutingStrategy: RoutingStrategy;
}
export default class Alias extends ResourceBase<AliasProperties> {
    static RoutingStrategy: typeof RoutingStrategy;
    constructor(properties: AliasProperties);
}
