import { ResourceBase } from '../resource';
import { Value } from '../dataTypes';
export interface RobotProperties {
    Fleet?: Value<string>;
    Architecture: Value<string>;
    GreengrassGroupId: Value<string>;
    Tags?: {
        [key: string]: any;
    };
    Name?: Value<string>;
}
export default class Robot extends ResourceBase<RobotProperties> {
    constructor(properties: RobotProperties);
}
