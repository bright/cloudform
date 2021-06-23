import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface OutcomeProperties {
    Name: Value<string>;
    Tags?: List<ResourceTag>;
    Description?: Value<string>;
}
export default class Outcome extends ResourceBase<OutcomeProperties> {
    constructor(properties: OutcomeProperties);
}
