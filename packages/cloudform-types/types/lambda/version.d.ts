import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class ProvisionedConcurrencyConfiguration {
    ProvisionedConcurrentExecutions: Value<number>;
    constructor(properties: ProvisionedConcurrencyConfiguration);
}
export declare class RuntimePolicy {
    UpdateRuntimeOn: Value<string>;
    RuntimeVersionArn?: Value<string>;
    constructor(properties: RuntimePolicy);
}
export interface VersionProperties {
    FunctionName: Value<string>;
    ProvisionedConcurrencyConfig?: ProvisionedConcurrencyConfiguration;
    Description?: Value<string>;
    RuntimePolicy?: RuntimePolicy;
    CodeSha256?: Value<string>;
}
export default class Version extends ResourceBase<VersionProperties> {
    static ProvisionedConcurrencyConfiguration: typeof ProvisionedConcurrencyConfiguration;
    static RuntimePolicy: typeof RuntimePolicy;
    constructor(properties: VersionProperties);
}
