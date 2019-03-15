import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Core {
    SyncShadow?: Value<boolean>;
    ThingArn: Value<string>;
    Id: Value<string>;
    CertificateArn: Value<string>;
    constructor(properties: Core);
}
export declare class CoreDefinitionVersion {
    Cores: List<Core>;
    constructor(properties: CoreDefinitionVersion);
}
export interface CoreDefinitionProperties {
    InitialVersion?: CoreDefinitionVersion;
    Name: Value<string>;
}
export default class CoreDefinition extends ResourceBase<CoreDefinitionProperties> {
    static Core: typeof Core;
    static CoreDefinitionVersion: typeof CoreDefinitionVersion;
    constructor(properties: CoreDefinitionProperties);
}
