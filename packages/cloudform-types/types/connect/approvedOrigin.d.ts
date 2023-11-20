import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface ApprovedOriginProperties {
    Origin: Value<string>;
    InstanceId: Value<string>;
}
export default class ApprovedOrigin extends ResourceBase<ApprovedOriginProperties> {
    constructor(properties: ApprovedOriginProperties);
}
