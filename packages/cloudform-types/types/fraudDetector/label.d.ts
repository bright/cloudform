import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface LabelProperties {
    Description?: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Label extends ResourceBase<LabelProperties> {
    constructor(properties: LabelProperties);
}
