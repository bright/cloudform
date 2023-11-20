import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface StudioProperties {
    WorkspaceSecurityGroupId: Value<string>;
    Description?: Value<string>;
    DefaultS3Location: Value<string>;
    SubnetIds: List<Value<string>>;
    IdpAuthUrl?: Value<string>;
    Name: Value<string>;
    ServiceRole: Value<string>;
    VpcId: Value<string>;
    EngineSecurityGroupId: Value<string>;
    UserRole?: Value<string>;
    IdpRelayStateParameterName?: Value<string>;
    AuthMode: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Studio extends ResourceBase<StudioProperties> {
    constructor(properties: StudioProperties);
}
