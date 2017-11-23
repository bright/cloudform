import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface IPSetDescriptorProperties {
    Type: Value<string>;
    Value: Value<string>;
}
export declare class IPSetDescriptor extends ResourceBase {
    constructor(properties: IPSetDescriptorProperties, dependsOn?: Value<string>);
}
export interface IPSetProperties {
    IPSetDescriptors?: IPSetDescriptor[];
    Name: Value<string>;
}
export default class IPSet extends ResourceBase {
    constructor(properties: IPSetProperties, dependsOn?: Value<string>);
}
