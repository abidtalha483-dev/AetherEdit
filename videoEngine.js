// Phase 3: Video Engine
class VideoEngine {
    constructor() {
        this.playing = false;
        this.currentVideo = null;
    }

    play(video) {
        this.currentVideo = video;
        this.playing = true;
        console.log(`Playing: ${video}`);
    }

    pause() {
        this.playing = false;
        console.log('Paused');
    }

    stop() {
        this.playing = false;
        this.currentVideo = null;
        console.log('Stopped');
    }
}

// Export the VideoEngine class
export default VideoEngine;