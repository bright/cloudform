import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface StudioProperties {
    AuthMode: Value<string>;
    DefaultS3Location: Value<string>;
    Description?: Value<string>;
    EngineSecurityGroupId: Value<string>;
    Name: Value<string>;
    ServiceRole: Value<string>;
    SubnetIds: List<Value<string>>;
    Tags?: List<ResourceTag>;
    UserRole: Value<string>;
    VpcId: Value<string>;
    WorkspaceSecurityGroupId: Value<string>;
}
export default class Studio extends ResourceBase<StudioProperties> {
    constructor(properties: StudioProperties);
}
