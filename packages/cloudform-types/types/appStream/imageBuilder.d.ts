import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class AccessEndpoint {
    EndpointType: Value<string>;
    VpceId: Value<string>;
    constructor(properties: AccessEndpoint);
}
export declare class DomainJoinInfo {
    OrganizationalUnitDistinguishedName?: Value<string>;
    DirectoryName?: Value<string>;
    constructor(properties: DomainJoinInfo);
}
export declare class VpcConfig {
    SecurityGroupIds?: List<Value<string>>;
    SubnetIds?: List<Value<string>>;
    constructor(properties: VpcConfig);
}
export interface ImageBuilderProperties {
    Description?: Value<string>;
    VpcConfig?: VpcConfig;
    EnableDefaultInternetAccess?: Value<boolean>;
    DomainJoinInfo?: DomainJoinInfo;
    AppstreamAgentVersion?: Value<string>;
    Name: Value<string>;
    ImageName?: Value<string>;
    DisplayName?: Value<string>;
    IamRoleArn?: Value<string>;
    InstanceType: Value<string>;
    Tags?: List<ResourceTag>;
    ImageArn?: Value<string>;
    AccessEndpoints?: List<AccessEndpoint>;
}
export default class ImageBuilder extends ResourceBase<ImageBuilderProperties> {
    static AccessEndpoint: typeof AccessEndpoint;
    static DomainJoinInfo: typeof DomainJoinInfo;
    static VpcConfig: typeof VpcConfig;
    constructor(properties: ImageBuilderProperties);
}
