import { ResourceBase, ResourceTag } from '../resource';
import { Value } from '../dataTypes';
export interface EndpointProperties {
    EndpointName?: Value<string>;
    EndpointConfigName: Value<string>;
    Tags?: ResourceTag[];
}
export default class Endpoint extends ResourceBase {
    constructor(properties?: EndpointProperties);
}
