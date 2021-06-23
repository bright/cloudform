import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface AccessPointPolicyProperties {
    ObjectLambdaAccessPoint: Value<string>;
    PolicyDocument: {
        [key: string]: any;
    };
}
export default class AccessPointPolicy extends ResourceBase<AccessPointPolicyProperties> {
    constructor(properties: AccessPointPolicyProperties);
}
