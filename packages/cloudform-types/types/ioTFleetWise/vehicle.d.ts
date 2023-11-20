import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface VehicleProperties {
    AssociationBehavior?: Value<string>;
    Attributes?: {
        [key: string]: Value<string>;
    };
    DecoderManifestArn: Value<string>;
    ModelManifestArn: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class Vehicle extends ResourceBase<VehicleProperties> {
    constructor(properties: VehicleProperties);
}
