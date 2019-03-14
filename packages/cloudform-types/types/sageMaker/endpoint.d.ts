import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface EndpointProperties {
    EndpointName?: Value<string>;
    EndpointConfigName: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Endpoint extends ResourceBase<EndpointProperties> {
    constructor(properties: EndpointProperties);
}
