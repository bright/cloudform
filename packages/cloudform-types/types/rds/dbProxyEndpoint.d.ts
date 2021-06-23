import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class TagFormat {
    Key?: Value<string>;
    Value?: Value<string>;
    constructor(properties: TagFormat);
}
export interface DBProxyEndpointProperties {
    DBProxyEndpointName: Value<string>;
    DBProxyName: Value<string>;
    VpcSecurityGroupIds?: List<Value<string>>;
    VpcSubnetIds: List<Value<string>>;
    TargetRole?: Value<string>;
    Tags?: List<TagFormat>;
}
export default class DBProxyEndpoint extends ResourceBase<DBProxyEndpointProperties> {
    static TagFormat: typeof TagFormat;
    constructor(properties: DBProxyEndpointProperties);
}
