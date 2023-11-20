import { ResourceBase } from '../resource';
import { Value, List } from '../dataTypes';
export interface SceneProperties {
    SceneId: Value<string>;
    Description?: Value<string>;
    SceneMetadata?: {
        [key: string]: Value<string>;
    };
    ContentLocation: Value<string>;
    Capabilities?: List<Value<string>>;
    WorkspaceId: Value<string>;
    Tags?: {
        [key: string]: Value<string>;
    };
}
export default class Scene extends ResourceBase<SceneProperties> {
    constructor(properties: SceneProperties);
}
