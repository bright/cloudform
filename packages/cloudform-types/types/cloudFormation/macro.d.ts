import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface MacroProperties {
    Description?: Value<string>;
    FunctionName: Value<string>;
    LogGroupName?: Value<string>;
    LogRoleARN?: Value<string>;
    Name: Value<string>;
}
export default class Macro extends ResourceBase<MacroProperties> {
    constructor(properties: MacroProperties);
}
