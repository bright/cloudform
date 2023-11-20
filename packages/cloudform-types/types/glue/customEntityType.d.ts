import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface CustomEntityTypeProperties {
    ContextWords?: List<Value<string>>;
    RegexString?: Value<string>;
    Tags?: {
        [key: string]: any;
    };
    Name?: Value<string>;
}
export default class CustomEntityType extends ResourceBase<CustomEntityTypeProperties> {
    constructor(properties?: CustomEntityTypeProperties);
}
