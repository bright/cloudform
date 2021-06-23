import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface AssignmentProperties {
    InstanceArn: Value<string>;
    TargetId: Value<string>;
    TargetType: Value<string>;
    PermissionSetArn: Value<string>;
    PrincipalType: Value<string>;
    PrincipalId: Value<string>;
}
export default class Assignment extends ResourceBase<AssignmentProperties> {
    constructor(properties: AssignmentProperties);
}
