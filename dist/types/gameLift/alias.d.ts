import { ResourceBase } from '../resource';
import { Value } from '../internal';
import RoutingStrategy from './routingStrategy';
export interface AliasProperties {
    Description?: Value<string>;
    Name: Value<string>;
    RoutingStrategy?: RoutingStrategy;
}
export default class Alias extends ResourceBase {
    constructor(properties: AliasProperties, dependsOn?: Value<string>);
}
