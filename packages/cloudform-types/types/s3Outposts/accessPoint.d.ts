import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class VpcConfiguration {
    VpcId?: Value<string>;
    constructor(properties: VpcConfiguration);
}
export interface AccessPointProperties {
    Policy?: {
        [key: string]: any;
    };
    Bucket: Value<string>;
    VpcConfiguration: VpcConfiguration;
    Name: Value<string>;
}
export default class AccessPoint extends ResourceBase<AccessPointProperties> {
    static VpcConfiguration: typeof VpcConfiguration;
    constructor(properties: AccessPointProperties);
}
