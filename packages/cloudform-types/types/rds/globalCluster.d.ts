import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface GlobalClusterProperties {
    Engine?: Value<string>;
    EngineVersion?: Value<string>;
    DeletionProtection?: Value<boolean>;
    GlobalClusterIdentifier?: Value<string>;
    SourceDBClusterIdentifier?: Value<string>;
    StorageEncrypted?: Value<boolean>;
}
export default class GlobalCluster extends ResourceBase<GlobalClusterProperties> {
    constructor(properties?: GlobalClusterProperties);
}
