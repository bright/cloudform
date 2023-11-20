import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class VpcConfig {
    VpcId: Value<string>;
    SecurityGroupIds: List<Value<string>>;
    SubnetIds: List<Value<string>>;
    constructor(properties: VpcConfig);
}
export interface TestGridProjectProperties {
    Description?: Value<string>;
    VpcConfig?: VpcConfig;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class TestGridProject extends ResourceBase<TestGridProjectProperties> {
    static VpcConfig: typeof VpcConfig;
    constructor(properties: TestGridProjectProperties);
}
