import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface WorkflowProperties {
    Description?: Value<string>;
    DefaultRunProperties?: {
        [key: string]: any;
    };
    Tags?: {
        [key: string]: any;
    };
    Name?: Value<string>;
}
export default class Workflow extends ResourceBase<WorkflowProperties> {
    constructor(properties?: WorkflowProperties);
}
