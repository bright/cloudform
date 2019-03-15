import Subscription_ from './subscription';
import Topic_ from './topic';
import TopicPolicy_ from './topicPolicy';
export declare namespace SNS {
    const Subscription: typeof Subscription_;
    const Topic: typeof Topic_;
    const TopicPolicy: typeof TopicPolicy_;
    type Subscription = Subscription_;
    type Topic = Topic_;
    type TopicPolicy = TopicPolicy_;
}
