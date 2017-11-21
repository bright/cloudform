import { ResourceBase } from '../resource';
import { Value } from '../internal';
import ActionTypeId from './actionTypeId';
import InputArtifacts from './inputArtifacts';
import OutputArtifacts from './outputArtifacts';
export interface ActionProperties {
    ActionTypeId: ActionTypeId;
    Configuration?: any;
    InputArtifacts: InputArtifacts;
    Name: Value<string>;
    OutputArtifacts: OutputArtifacts;
    RoleArn?: Value<string>;
    RunOrder?: Value<number>;
}
export default class Action extends ResourceBase {
    constructor(properties: ActionProperties, dependsOn?: Value<string>);
}
