import { Value } from "./dataTypes";
export default interface Output {
    Description?: Value<string>;
    Value: any;
    Export?: {
        Name: Value<string>;
    };
    Condition?: Value<string>;
}
