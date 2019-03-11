import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class VpcConfig {
    SecurityGroupIds?: List<Value<string>>;
    SubnetIds?: List<Value<string>>;
    constructor(properties: VpcConfig);
}
export declare class DomainJoinInfo {
    OrganizationalUnitDistinguishedName?: Value<string>;
    DirectoryName?: Value<string>;
    constructor(properties: DomainJoinInfo);
}
export interface ImageBuilderProperties {
    ImageName?: Value<string>;
    Description?: Value<string>;
    VpcConfig?: VpcConfig;
    EnableDefaultInternetAccess?: Value<boolean>;
    DisplayName?: Value<string>;
    DomainJoinInfo?: DomainJoinInfo;
    AppstreamAgentVersion?: Value<string>;
    InstanceType: Value<string>;
    Name?: Value<string>;
    ImageArn?: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class ImageBuilder extends ResourceBase {
    static VpcConfig: typeof VpcConfig;
    static DomainJoinInfo: typeof DomainJoinInfo;
    constructor(properties?: ImageBuilderProperties);
}
