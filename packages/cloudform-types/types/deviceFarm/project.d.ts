import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class VpcConfig {
    VpcId: Value<string>;
    SecurityGroupIds: List<Value<string>>;
    SubnetIds: List<Value<string>>;
    constructor(properties: VpcConfig);
}
export interface ProjectProperties {
    DefaultJobTimeoutMinutes?: Value<number>;
    VpcConfig?: VpcConfig;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Project extends ResourceBase<ProjectProperties> {
    static VpcConfig: typeof VpcConfig;
    constructor(properties: ProjectProperties);
}
