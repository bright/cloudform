import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class TagFormat {
    Key?: Value<string>;
    Value?: Value<string>;
    constructor(properties: TagFormat);
}
export declare class AuthFormat {
    AuthScheme?: Value<string>;
    Description?: Value<string>;
    IAMAuth?: Value<string>;
    SecretArn?: Value<string>;
    UserName?: Value<string>;
    constructor(properties: AuthFormat);
}
export interface DBProxyProperties {
    Auth: List<AuthFormat>;
    DBProxyName: Value<string>;
    DebugLogging?: Value<boolean>;
    EngineFamily: Value<string>;
    IdleClientTimeout?: Value<number>;
    RequireTLS?: Value<boolean>;
    RoleArn: Value<string>;
    Tags?: List<TagFormat>;
    VpcSecurityGroupIds?: List<Value<string>>;
    VpcSubnetIds: List<Value<string>>;
}
export default class DBProxy extends ResourceBase<DBProxyProperties> {
    static TagFormat: typeof TagFormat;
    static AuthFormat: typeof AuthFormat;
    constructor(properties: DBProxyProperties);
}
