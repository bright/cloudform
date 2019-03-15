import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Core {
    SyncShadow?: Value<boolean>;
    ThingArn: Value<string>;
    Id: Value<string>;
    CertificateArn: Value<string>;
    constructor(properties: Core);
}
export interface CoreDefinitionVersionProperties {
    Cores: List<Core>;
    CoreDefinitionId: Value<string>;
}
export default class CoreDefinitionVersion extends ResourceBase<CoreDefinitionVersionProperties> {
    static Core: typeof Core;
    constructor(properties: CoreDefinitionVersionProperties);
}
