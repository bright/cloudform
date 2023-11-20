import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Action {
    Block?: {
        [key: string]: any;
    };
    Count?: {
        [key: string]: any;
    };
    constructor(properties: Action);
}
export declare class ApplicationLayerAutomaticResponseConfiguration {
    Status: Value<string>;
    Action: Action;
    constructor(properties: ApplicationLayerAutomaticResponseConfiguration);
}
export interface ProtectionProperties {
    ResourceArn: Value<string>;
    HealthCheckArns?: List<Value<string>>;
    ApplicationLayerAutomaticResponseConfiguration?: ApplicationLayerAutomaticResponseConfiguration;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Protection extends ResourceBase<ProtectionProperties> {
    static Action: typeof Action;
    static ApplicationLayerAutomaticResponseConfiguration: typeof ApplicationLayerAutomaticResponseConfiguration;
    constructor(properties: ProtectionProperties);
}
