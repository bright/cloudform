import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface DestinationProperties {
    DestinationName: Value<string>;
    DestinationPolicy: Value<string>;
    RoleArn: Value<string>;
    TargetArn: Value<string>;
}
export default class Destination extends ResourceBase<DestinationProperties> {
    constructor(properties: DestinationProperties);
}
