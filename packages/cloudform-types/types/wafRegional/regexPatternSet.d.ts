import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface RegexPatternSetProperties {
    RegexPatternStrings: List<Value<string>>;
    Name: Value<string>;
}
export default class RegexPatternSet extends ResourceBase<RegexPatternSetProperties> {
    constructor(properties: RegexPatternSetProperties);
}
