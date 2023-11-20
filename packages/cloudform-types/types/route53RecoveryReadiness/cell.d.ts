import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface CellProperties {
    CellName?: Value<string>;
    Cells?: List<Value<string>>;
    Tags?: List<ResourceTag>;
}
export default class Cell extends ResourceBase<CellProperties> {
    constructor(properties?: CellProperties);
}
