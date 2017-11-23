import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface RoutingStrategyProperties {
    FleetId?: Value<string>;
    Message?: Value<string>;
    Type: Value<string>;
}
export declare class RoutingStrategy extends ResourceBase {
    constructor(properties: RoutingStrategyProperties, dependsOn?: Value<string>);
}
export interface AliasProperties {
    Description?: Value<string>;
    Name: Value<string>;
    RoutingStrategy: RoutingStrategy;
}
export default class Alias extends ResourceBase {
    constructor(properties: AliasProperties, dependsOn?: Value<string>);
}
