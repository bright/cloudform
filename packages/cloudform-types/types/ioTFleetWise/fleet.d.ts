import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface FleetProperties {
    Description?: Value<string>;
    Id: Value<string>;
    SignalCatalogArn: Value<string>;
    Tags?: List<ResourceTag>;
}
export default class Fleet extends ResourceBase<FleetProperties> {
    constructor(properties: FleetProperties);
}
