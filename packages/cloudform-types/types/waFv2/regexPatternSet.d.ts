import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface RegexPatternSetProperties {
    Description?: Value<string>;
    Name?: Value<string>;
    RegularExpressionList: List<Value<string>>;
    Scope: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class RegexPatternSet extends ResourceBase<RegexPatternSetProperties> {
    constructor(properties: RegexPatternSetProperties);
}
