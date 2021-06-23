import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface LabelProperties {
    Name: Value<string>;
    Tags?: List<ResourceTag>;
    Description?: Value<string>;
}
export default class Label extends ResourceBase<LabelProperties> {
    constructor(properties: LabelProperties);
}
