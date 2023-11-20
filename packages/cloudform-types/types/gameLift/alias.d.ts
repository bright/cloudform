import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class RoutingStrategy {
    Type: Value<string>;
    Message?: Value<string>;
    FleetId?: Value<string>;
    constructor(properties: RoutingStrategy);
}
export interface AliasProperties {
    Description?: Value<string>;
    RoutingStrategy: RoutingStrategy;
    Name: Value<string>;
}
export default class Alias extends ResourceBase<AliasProperties> {
    static RoutingStrategy: typeof RoutingStrategy;
    constructor(properties: AliasProperties);
}
