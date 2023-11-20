import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface AssignmentProperties {
    PrincipalId: Value<string>;
    InstanceArn: Value<string>;
    TargetType: Value<string>;
    PermissionSetArn: Value<string>;
    PrincipalType: Value<string>;
    TargetId: Value<string>;
}
export default class Assignment extends ResourceBase<AssignmentProperties> {
    constructor(properties: AssignmentProperties);
}
