import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface RobotApplicationVersionProperties {
    CurrentRevisionId?: Value<string>;
    Application: Value<string>;
}
export default class RobotApplicationVersion extends ResourceBase<RobotApplicationVersionProperties> {
    constructor(properties: RobotApplicationVersionProperties);
}
