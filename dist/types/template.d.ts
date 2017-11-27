import Parameter from "./parameter";
import Resource from "./resource";
import { Condition } from "./dataTypes";
export default interface Template {
    Description?: string;
    Parameters?: {
        [key: string]: Parameter;
    };
    Mappings?: {
        [key: string]: {
            [key: string]: {
                [key: string]: string | number;
            };
        };
    };
    Conditions?: {
        [key: string]: Condition;
    };
    Resources?: {
        [key: string]: Resource;
    };
}
