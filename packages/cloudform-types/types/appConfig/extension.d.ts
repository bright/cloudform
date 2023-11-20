import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export declare class Parameter {
    Description?: Value<string>;
    Required: Value<boolean>;
    constructor(properties: Parameter);
}
export interface ExtensionProperties {
    Description?: Value<string>;
    Parameters?: {
        [key: string]: Parameter;
    };
    Actions: {
        [key: string]: any;
    };
    LatestVersionNumber?: Value<number>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Extension extends ResourceBase<ExtensionProperties> {
    static Parameter: typeof Parameter;
    constructor(properties: ExtensionProperties);
}
