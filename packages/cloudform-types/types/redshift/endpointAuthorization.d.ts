import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface EndpointAuthorizationProperties {
    Account: Value<string>;
    Force?: Value<boolean>;
    VpcIds?: List<Value<string>>;
    ClusterIdentifier: Value<string>;
}
export default class EndpointAuthorization extends ResourceBase<EndpointAuthorizationProperties> {
    constructor(properties: EndpointAuthorizationProperties);
}
