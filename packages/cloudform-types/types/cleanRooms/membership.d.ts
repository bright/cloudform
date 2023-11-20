import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class MembershipProtectedQueryOutputConfiguration {
    S3: ProtectedQueryS3OutputConfiguration;
    constructor(properties: MembershipProtectedQueryOutputConfiguration);
}
export declare class MembershipProtectedQueryResultConfiguration {
    OutputConfiguration: MembershipProtectedQueryOutputConfiguration;
    RoleArn?: Value<string>;
    constructor(properties: MembershipProtectedQueryResultConfiguration);
}
export declare class ProtectedQueryS3OutputConfiguration {
    Bucket: Value<string>;
    ResultFormat: Value<string>;
    KeyPrefix?: Value<string>;
    constructor(properties: ProtectedQueryS3OutputConfiguration);
}
export interface MembershipProperties {
    CollaborationIdentifier: Value<string>;
    DefaultResultConfiguration?: MembershipProtectedQueryResultConfiguration;
    QueryLogStatus: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Membership extends ResourceBase<MembershipProperties> {
    static MembershipProtectedQueryOutputConfiguration: typeof MembershipProtectedQueryOutputConfiguration;
    static MembershipProtectedQueryResultConfiguration: typeof MembershipProtectedQueryResultConfiguration;
    static ProtectedQueryS3OutputConfiguration: typeof ProtectedQueryS3OutputConfiguration;
    constructor(properties: MembershipProperties);
}
