import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface DestinationProperties {
    DestinationPolicy?: Value<string>;
    DestinationName: Value<string>;
    TargetArn: Value<string>;
    RoleArn: Value<string>;
}
export default class Destination extends ResourceBase<DestinationProperties> {
    constructor(properties: DestinationProperties);
}
