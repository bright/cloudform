import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ConfigProperties {
    Name: Value<string>;
    Tags?: List<ResourceTag>;
    ConfigData: {
        [key: string]: any;
    };
}
export default class Config extends ResourceBase<ConfigProperties> {
    constructor(properties: ConfigProperties);
}
