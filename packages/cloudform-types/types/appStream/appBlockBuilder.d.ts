import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AccessEndpoint {
    EndpointType: Value<string>;
    VpceId: Value<string>;
    constructor(properties: AccessEndpoint);
}
export declare class VpcConfig {
    SecurityGroupIds?: List<Value<string>>;
    SubnetIds?: List<Value<string>>;
    constructor(properties: VpcConfig);
}
export interface AppBlockBuilderProperties {
    Description?: Value<string>;
    Platform: Value<string>;
    VpcConfig: VpcConfig;
    AppBlockArns?: List<Value<string>>;
    EnableDefaultInternetAccess?: Value<boolean>;
    DisplayName?: Value<string>;
    IamRoleArn?: Value<string>;
    InstanceType: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
    AccessEndpoints?: List<AccessEndpoint>;
}
export default class AppBlockBuilder extends ResourceBase<AppBlockBuilderProperties> {
    static AccessEndpoint: typeof AccessEndpoint;
    static VpcConfig: typeof VpcConfig;
    constructor(properties: AppBlockBuilderProperties);
}
