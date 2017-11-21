import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface InputArtifactDetailsProperties {
    MaximumCount: Value<number>;
    MinimumCount: Value<number>;
}
export default class InputArtifactDetails extends ResourceBase {
    constructor(properties: InputArtifactDetailsProperties, dependsOn?: Value<string>);
}
