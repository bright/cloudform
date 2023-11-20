import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class TagFormat {
    Value?: Value<string>;
    Key?: Value<string>;
    constructor(properties: TagFormat);
}
export interface DBProxyEndpointProperties {
    DBProxyEndpointName: Value<string>;
    DBProxyName: Value<string>;
    TargetRole?: Value<string>;
    VpcSecurityGroupIds?: List<Value<string>>;
    VpcSubnetIds: List<Value<string>>;
    Tags?: List<TagFormat>;
}
export default class DBProxyEndpoint extends ResourceBase<DBProxyEndpointProperties> {
    static TagFormat: typeof TagFormat;
    constructor(properties: DBProxyEndpointProperties);
}
