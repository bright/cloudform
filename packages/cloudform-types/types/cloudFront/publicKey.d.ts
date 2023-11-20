import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class PublicKeyConfig {
    Comment?: Value<string>;
    CallerReference: Value<string>;
    EncodedKey: Value<string>;
    Name: Value<string>;
    constructor(properties: PublicKeyConfig);
}
export interface PublicKeyProperties {
    PublicKeyConfig: PublicKeyConfig;
}
export default class PublicKey extends ResourceBase<PublicKeyProperties> {
    static PublicKeyConfig: typeof PublicKeyConfig;
    constructor(properties: PublicKeyProperties);
}
