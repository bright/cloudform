import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ModelManifestProperties {
    Status?: Value<string>;
    Description?: Value<string>;
    SignalCatalogArn: Value<string>;
    Nodes?: List<Value<string>>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class ModelManifest extends ResourceBase<ModelManifestProperties> {
    constructor(properties: ModelManifestProperties);
}
