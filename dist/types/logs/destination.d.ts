import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface DestinationProperties {
    DestinationName: Value<string>;
    DestinationPolicy: Value<string>;
    RoleArn: Value<string>;
    TargetArn: Value<string>;
}
export default class Destination extends ResourceBase {
    constructor(properties: DestinationProperties, dependsOn?: Value<string>);
}
