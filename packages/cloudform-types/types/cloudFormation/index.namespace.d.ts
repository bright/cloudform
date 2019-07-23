import Stack_ from './stack';
import CustomResource_ from './customResource';
import WaitCondition_ from './waitCondition';
import WaitConditionHandle_ from './waitConditionHandle';
import Macro_ from './macro';
export declare namespace CloudFormation {
    const Stack: typeof Stack_;
    const CustomResource: typeof CustomResource_;
    const WaitCondition: typeof WaitCondition_;
    const WaitConditionHandle: typeof WaitConditionHandle_;
    const Macro: typeof Macro_;
    type Stack = Stack_;
    type CustomResource = CustomResource_;
    type WaitCondition = WaitCondition_;
    type WaitConditionHandle = WaitConditionHandle_;
    type Macro = Macro_;
}
