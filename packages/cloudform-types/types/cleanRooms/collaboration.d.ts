import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class DataEncryptionMetadata {
    AllowCleartext: Value<boolean>;
    PreserveNulls: Value<boolean>;
    AllowJoinsOnColumnsWithDifferentNames: Value<boolean>;
    AllowDuplicates: Value<boolean>;
    constructor(properties: DataEncryptionMetadata);
}
export declare class MemberSpecification {
    AccountId: Value<string>;
    DisplayName: Value<string>;
    MemberAbilities: List<Value<string>>;
    constructor(properties: MemberSpecification);
}
export interface CollaborationProperties {
    CreatorDisplayName: Value<string>;
    CreatorMemberAbilities: List<Value<string>>;
    Description: Value<string>;
    QueryLogStatus: Value<string>;
    DataEncryptionMetadata?: DataEncryptionMetadata;
    Tags?: List<ResourceTag>;
    Members: List<MemberSpecification>;
    Name: Value<string>;
}
export default class Collaboration extends ResourceBase<CollaborationProperties> {
    static DataEncryptionMetadata: typeof DataEncryptionMetadata;
    static MemberSpecification: typeof MemberSpecification;
    constructor(properties: CollaborationProperties);
}
