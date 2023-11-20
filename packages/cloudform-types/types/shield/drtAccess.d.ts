import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface DRTAccessProperties {
    LogBucketList?: List<Value<string>>;
    RoleArn: Value<string>;
}
export default class DRTAccess extends ResourceBase<DRTAccessProperties> {
    constructor(properties: DRTAccessProperties);
}
