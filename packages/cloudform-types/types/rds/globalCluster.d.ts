import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface GlobalClusterProperties {
    StorageEncrypted?: Value<boolean>;
    EngineVersion?: Value<string>;
    SourceDBClusterIdentifier?: Value<string>;
    DeletionProtection?: Value<boolean>;
    GlobalClusterIdentifier?: Value<string>;
    Engine?: Value<string>;
}
export default class GlobalCluster extends ResourceBase<GlobalClusterProperties> {
    constructor(properties?: GlobalClusterProperties);
}
