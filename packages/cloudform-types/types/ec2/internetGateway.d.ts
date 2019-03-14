import { ResourceBase, ResourceTag } from '../resource';
import { List } from '../dataTypes';
export interface InternetGatewayProperties {
    Tags?: List<ResourceTag>;
}
export default class InternetGateway extends ResourceBase<InternetGatewayProperties> {
    constructor(properties?: InternetGatewayProperties);
}
