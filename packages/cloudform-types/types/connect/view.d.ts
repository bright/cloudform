import { ResourceBase, ResourceTag } from '../resource';
import { Value, List } from '../dataTypes';
export interface ViewProperties {
    Description?: Value<string>;
    Actions: List<Value<string>>;
    InstanceArn: Value<string>;
    Tags?: List<ResourceTag>;
    Name: Value<string>;
    Template: {
        [key: string]: any;
    };
}
export default class View extends ResourceBase<ViewProperties> {
    constructor(properties: ViewProperties);
}
