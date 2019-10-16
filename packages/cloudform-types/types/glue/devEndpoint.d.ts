import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface DevEndpointProperties {
    ExtraJarsS3Path?: Value<string>;
    PublicKey?: Value<string>;
    NumberOfNodes?: Value<number>;
    Arguments?: {
        [key: string]: any;
    };
    SubnetId?: Value<string>;
    SecurityGroupIds?: List<Value<string>>;
    RoleArn: Value<string>;
    WorkerType?: Value<string>;
    EndpointName?: Value<string>;
    GlueVersion?: Value<string>;
    ExtraPythonLibsS3Path?: Value<string>;
    SecurityConfiguration?: Value<string>;
    NumberOfWorkers?: Value<number>;
    Tags?: {
        [key: string]: any;
    };
}
export default class DevEndpoint extends ResourceBase<DevEndpointProperties> {
    constructor(properties: DevEndpointProperties);
}
