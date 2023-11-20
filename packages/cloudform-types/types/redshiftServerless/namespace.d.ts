import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class NamespaceInner {
    Status?: Value<string>;
    NamespaceName?: Value<string>;
    AdminUsername?: Value<string>;
    CreationDate?: Value<string>;
    IamRoles?: List<Value<string>>;
    NamespaceArn?: Value<string>;
    KmsKeyId?: Value<string>;
    DbName?: Value<string>;
    NamespaceId?: Value<string>;
    DefaultIamRoleArn?: Value<string>;
    LogExports?: List<Value<string>>;
    constructor(properties: NamespaceInner);
}
export interface NamespaceProperties {
    AdminUsername?: Value<string>;
    NamespaceName: Value<string>;
    IamRoles?: List<Value<string>>;
    KmsKeyId?: Value<string>;
    FinalSnapshotName?: Value<string>;
    FinalSnapshotRetentionPeriod?: Value<number>;
    AdminUserPassword?: Value<string>;
    DbName?: Value<string>;
    DefaultIamRoleArn?: Value<string>;
    Tags?: List<ResourceTag>;
    LogExports?: List<Value<string>>;
}
export default class Namespace extends ResourceBase<NamespaceProperties> {
    static Namespace: typeof NamespaceInner;
    constructor(properties: NamespaceProperties);
}
