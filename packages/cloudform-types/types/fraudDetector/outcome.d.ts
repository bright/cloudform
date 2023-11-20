import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface OutcomeProperties {
    Description?: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Outcome extends ResourceBase<OutcomeProperties> {
    constructor(properties: OutcomeProperties);
}
