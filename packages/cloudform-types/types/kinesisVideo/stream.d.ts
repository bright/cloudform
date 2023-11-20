import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface StreamProperties {
    KmsKeyId?: Value<string>;
    MediaType?: Value<string>;
    DataRetentionInHours?: Value<number>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
    DeviceName?: Value<string>;
}
export default class Stream extends ResourceBase<StreamProperties> {
    constructor(properties?: StreamProperties);
}
