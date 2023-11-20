import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface DirectoryRegistrationProperties {
    DirectoryId: Value<string>;
    Tags?: {
        [key: string]: Value<string>;
    };
}
export default class DirectoryRegistration extends ResourceBase<DirectoryRegistrationProperties> {
    constructor(properties: DirectoryRegistrationProperties);
}
