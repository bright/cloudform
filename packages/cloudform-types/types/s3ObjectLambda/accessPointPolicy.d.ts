import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface AccessPointPolicyProperties {
    PolicyDocument: {
        [key: string]: any;
    };
    ObjectLambdaAccessPoint: Value<string>;
}
export default class AccessPointPolicy extends ResourceBase<AccessPointPolicyProperties> {
    constructor(properties: AccessPointPolicyProperties);
}
