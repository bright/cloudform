import { ResourceBase } from '../resource';
import { Value } from '../internal';
import MethodSettings from './methodSettings';
export interface StageProperties {
    CacheClusterEnabled?: Value<string>;
    CacheClusterSize?: Value<string>;
    ClientCertificateId?: Value<string>;
    DeploymentId: Value<string>;
    Description: Value<string>;
    MethodSettings?: MethodSettings;
    RestApiId: Value<string>;
    StageName: Value<string>;
    Variables?: any;
}
export default class Stage extends ResourceBase {
    constructor(properties: StageProperties, dependsOn?: Value<string>);
}
