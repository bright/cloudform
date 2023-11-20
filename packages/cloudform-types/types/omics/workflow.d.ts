import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export declare class WorkflowParameter {
    Description?: Value<string>;
    Optional?: Value<boolean>;
    constructor(properties: WorkflowParameter);
}
export interface WorkflowProperties {
    ParameterTemplate?: {
        [key: string]: WorkflowParameter;
    };
    Description?: Value<string>;
    StorageCapacity?: Value<number>;
    Accelerators?: Value<string>;
    DefinitionUri?: Value<string>;
    Main?: Value<string>;
    Engine?: Value<string>;
    Tags?: {
        [key: string]: Value<string>;
    };
    Name?: Value<string>;
}
export default class Workflow extends ResourceBase<WorkflowProperties> {
    static WorkflowParameter: typeof WorkflowParameter;
    constructor(properties?: WorkflowProperties);
}
