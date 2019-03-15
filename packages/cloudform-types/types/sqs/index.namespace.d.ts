import Queue_ from './queue';
import QueuePolicy_ from './queuePolicy';
export declare namespace SQS {
    const Queue: typeof Queue_;
    const QueuePolicy: typeof QueuePolicy_;
    type Queue = Queue_;
    type QueuePolicy = QueuePolicy_;
}
