import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ProfileProperties {
    As2Id: Value<string>;
    ProfileType: Value<string>;
    CertificateIds?: List<Value<string>>;
    Tags?: List<ResourceTag>;
}
export default class Profile extends ResourceBase<ProfileProperties> {
    constructor(properties: ProfileProperties);
}
