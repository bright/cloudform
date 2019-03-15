import Stream_ from './stream';
import StreamConsumer_ from './streamConsumer';
export declare namespace Kinesis {
    const Stream: typeof Stream_;
    const StreamConsumer: typeof StreamConsumer_;
    type Stream = Stream_;
    type StreamConsumer = StreamConsumer_;
}
