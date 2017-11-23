import Parameter from "./parameter";
import Resource from "./resource";
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
    Resources?: {
        [key: string]: Resource;
    };
}
