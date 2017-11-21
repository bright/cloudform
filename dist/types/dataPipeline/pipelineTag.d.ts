import { ResourceBase } from '../resource';
import { Value } from '../internal';
export interface PipelineTagProperties {
    Key: Value<string>;
    Value: Value<string>;
}
export default class PipelineTag extends ResourceBase {
    constructor(properties: PipelineTagProperties, dependsOn?: Value<string>);
}
