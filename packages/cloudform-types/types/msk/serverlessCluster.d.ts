import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class ClientAuthentication {
    Sasl: Sasl;
    constructor(properties: ClientAuthentication);
}
export declare class Iam {
    Enabled: Value<boolean>;
    constructor(properties: Iam);
}
export declare class Sasl {
    Iam: Iam;
    constructor(properties: Sasl);
}
export declare class VpcConfig {
    SecurityGroups?: List<Value<string>>;
    SubnetIds: List<Value<string>>;
    constructor(properties: VpcConfig);
}
export interface ServerlessClusterProperties {
    VpcConfigs: List<VpcConfig>;
    ClusterName: Value<string>;
    ClientAuthentication: ClientAuthentication;
    Tags?: {
        [key: string]: Value<string>;
    };
}
export default class ServerlessCluster extends ResourceBase<ServerlessClusterProperties> {
    static ClientAuthentication: typeof ClientAuthentication;
    static Iam: typeof Iam;
    static Sasl: typeof Sasl;
    static VpcConfig: typeof VpcConfig;
    constructor(properties: ServerlessClusterProperties);
}
