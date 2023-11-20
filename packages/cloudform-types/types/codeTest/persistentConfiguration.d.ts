import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export declare class VpcConfig {
    Subnets?: List<Value<string>>;
    SecurityGroupIds?: List<Value<string>>;
    constructor(properties: VpcConfig);
}
export interface PersistentConfigurationProperties {
    Version?: Value<string>;
    VpcConfig?: VpcConfig;
    Name?: Value<string>;
    ResultsRoleArn: Value<string>;
}
export default class PersistentConfiguration extends ResourceBase<PersistentConfigurationProperties> {
    static VpcConfig: typeof VpcConfig;
    constructor(properties: PersistentConfigurationProperties);
}
