import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface VpcConnectionProperties {
    SecurityGroups: List<Value<string>>;
    TargetClusterArn: Value<string>;
    ClientSubnets: List<Value<string>>;
    VpcId: Value<string>;
    Authentication: Value<string>;
    Tags?: {
        [key: string]: Value<string>;
    };
}
export default class VpcConnection extends ResourceBase<VpcConnectionProperties> {
    constructor(properties: VpcConnectionProperties);
}
