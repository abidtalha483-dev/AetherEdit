// Phase 3: Video Processing System
class VideoProcessor {
    constructor() {
        this.queue = [];
    }

    addToQueue(video) {
        this.queue.push(video);
        console.log(`Added to queue: ${video}`);
    }

    processNext() {
        if (this.queue.length > 0) {
            const nextVideo = this.queue.shift();
            console.log(`Processing: ${nextVideo}`);
            // Simulate processing...
        } else {
            console.log('No videos in queue to process');
        }
    }
}

// Export the VideoProcessor class
export default VideoProcessor;