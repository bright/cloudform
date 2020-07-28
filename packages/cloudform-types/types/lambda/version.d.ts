import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class ProvisionedConcurrencyConfiguration {
    ProvisionedConcurrentExecutions: Value<number>;
    constructor(properties: ProvisionedConcurrencyConfiguration);
}
export interface VersionProperties {
    CodeSha256?: Value<string>;
    Description?: Value<string>;
    FunctionName: Value<string>;
    ProvisionedConcurrencyConfig?: ProvisionedConcurrencyConfiguration;
}
export default class Version extends ResourceBase<VersionProperties> {
    static ProvisionedConcurrencyConfiguration: typeof ProvisionedConcurrencyConfiguration;
    constructor(properties: VersionProperties);
}
