import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface OrganizationProperties {
    FeatureSet?: Value<string>;
}
export default class Organization extends ResourceBase<OrganizationProperties> {
    constructor(properties?: OrganizationProperties);
}
