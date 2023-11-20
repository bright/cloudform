import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AuthFormat {
    SecretArn?: Value<string>;
    Description?: Value<string>;
    IAMAuth?: Value<string>;
    ClientPasswordAuthType?: Value<string>;
    AuthScheme?: Value<string>;
    constructor(properties: AuthFormat);
}
export declare class TagFormat {
    Value?: Value<string>;
    Key?: Value<string>;
    constructor(properties: TagFormat);
}
export interface DBProxyProperties {
    RequireTLS?: Value<boolean>;
    DBProxyName: Value<string>;
    IdleClientTimeout?: Value<number>;
    VpcSecurityGroupIds?: List<Value<string>>;
    Auth: List<AuthFormat>;
    DebugLogging?: Value<boolean>;
    VpcSubnetIds: List<Value<string>>;
    RoleArn: Value<string>;
    EngineFamily: Value<string>;
    Tags?: List<TagFormat>;
}
export default class DBProxy extends ResourceBase<DBProxyProperties> {
    static AuthFormat: typeof AuthFormat;
    static TagFormat: typeof TagFormat;
    constructor(properties: DBProxyProperties);
}
