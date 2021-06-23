import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class VpcConfiguration {
    VpcId?: Value<string>;
    constructor(properties: VpcConfiguration);
}
export interface AccessPointProperties {
    Bucket: Value<string>;
    Name: Value<string>;
    VpcConfiguration: VpcConfiguration;
    Policy?: {
        [key: string]: any;
    };
}
export default class AccessPoint extends ResourceBase<AccessPointProperties> {
    static VpcConfiguration: typeof VpcConfiguration;
    constructor(properties: AccessPointProperties);
}
