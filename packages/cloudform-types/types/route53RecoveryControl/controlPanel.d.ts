import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ControlPanelProperties {
    ClusterArn?: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
}
export default class ControlPanel extends ResourceBase<ControlPanelProperties> {
    constructor(properties: ControlPanelProperties);
}
