import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface PublisherProperties {
    AcceptTermsAndConditions: Value<boolean>;
    ConnectionArn?: Value<string>;
}
export default class Publisher extends ResourceBase<PublisherProperties> {
    constructor(properties: PublisherProperties);
}
