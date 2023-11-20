import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface IPSetProperties {
    Format: Value<string>;
    Activate: Value<boolean>;
    DetectorId: Value<string>;
    Tags?: List<ResourceTag>;
    Name?: Value<string>;
    Location: Value<string>;
}
export default class IPSet extends ResourceBase<IPSetProperties> {
    constructor(properties: IPSetProperties);
}
