import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface DevEndpointProperties {
    ExtraJarsS3Path?: Value<string>;
    EndpointName?: Value<string>;
    PublicKey?: Value<string>;
    NumberOfNodes?: Value<number>;
    SubnetId?: Value<string>;
    ExtraPythonLibsS3Path?: Value<string>;
    SecurityConfiguration?: Value<string>;
    SecurityGroupIds?: List<Value<string>>;
    RoleArn: Value<string>;
    Tags?: {
        [key: string]: any;
    };
}
export default class DevEndpoint extends ResourceBase<DevEndpointProperties> {
    constructor(properties: DevEndpointProperties);
}
