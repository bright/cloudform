import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class NameNode {
    Port: Value<number>;
    Hostname: Value<string>;
    constructor(properties: NameNode);
}
export declare class QopConfiguration {
    RpcProtection?: Value<string>;
    DataTransferProtection?: Value<string>;
    constructor(properties: QopConfiguration);
}
export interface LocationHDFSProperties {
    KmsKeyProviderUri?: Value<string>;
    QopConfiguration?: QopConfiguration;
    KerberosPrincipal?: Value<string>;
    SimpleUser?: Value<string>;
    ReplicationFactor?: Value<number>;
    KerberosKeytab?: Value<string>;
    NameNodes: List<NameNode>;
    Subdirectory?: Value<string>;
    KerberosKrb5Conf?: Value<string>;
    BlockSize?: Value<number>;
    Tags?: List<ResourceTag>;
    AgentArns: List<Value<string>>;
    AuthenticationType: Value<string>;
}
export default class LocationHDFS extends ResourceBase<LocationHDFSProperties> {
    static NameNode: typeof NameNode;
    static QopConfiguration: typeof QopConfiguration;
    constructor(properties: LocationHDFSProperties);
}
