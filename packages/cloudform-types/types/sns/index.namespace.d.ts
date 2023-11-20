import Subscription_ from './subscription';
import Topic_ from './topic';
import TopicInlinePolicy_ from './topicInlinePolicy';
import TopicPolicy_ from './topicPolicy';
export declare namespace SNS {
    const Subscription: typeof Subscription_;
    const Topic: typeof Topic_;
    const TopicInlinePolicy: typeof TopicInlinePolicy_;
    const TopicPolicy: typeof TopicPolicy_;
    type Subscription = Subscription_;
    type Topic = Topic_;
    type TopicInlinePolicy = TopicInlinePolicy_;
    type TopicPolicy = TopicPolicy_;
}
