class Timer {
    constructor(initialDuration = 30000) {
        this.duration = initialDuration;
        this.remaining = initialDuration;
        this.isRunning = false;
        this.timerBar = document.getElementById('timer-bar');
        this.setupTimerBar();
    }

    setupTimerBar() {
        this.timerBar.style.setProperty('--duration', `${this.duration}ms`);
        this.timerBar.style.setProperty('--progress', '100%');
        this.updateTimerBarColor(100);
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this.startTime = Date.now() - (this.duration - this.remaining);
            this.tick();
        }
    }

    pause() {
        if (this.isRunning) {
            this.isRunning = false;
            this.remaining = Math.max(0, this.duration - (Date.now() - this.startTime));
            cancelAnimationFrame(this.animationFrame);
        }
    }

    reset(newDuration = this.duration) {
        this.duration = newDuration;
        this.remaining = newDuration;
        this.isRunning = false;
        cancelAnimationFrame(this.animationFrame);
        this.setupTimerBar();
    }

    addTime(milliseconds) {
        const newRemaining = this.remaining + milliseconds;
        this.remaining = Math.min(newRemaining, this.duration);
        if (this.isRunning) {
            this.startTime = Date.now() - (this.duration - this.remaining);
        }
        this.updateTimerBar();
    }

    subtractTime(milliseconds) {
        this.remaining = Math.max(0, this.remaining - milliseconds);
        if (this.isRunning) {
            this.startTime = Date.now() - (this.duration - this.remaining);
        }
        this.updateTimerBar();
    }

    tick() {
        if (!this.isRunning) return;

        const now = Date.now();
        this.remaining = Math.max(0, this.duration - (now - this.startTime));
        
        this.updateTimerBar();

        if (this.remaining <= 0) {
            this.timeUp();
            return;
        }

        this.animationFrame = requestAnimationFrame(() => this.tick());
    }

    updateTimerBar() {
        const progress = (this.remaining / this.duration) * 100;
        this.timerBar.style.setProperty('--progress', `${progress}%`);
        this.updateTimerBarColor(progress);
    }

    updateTimerBarColor(progress) {
        // Interpolate between green (117) and red (3)
        const hue = (progress / 100) * (117 - 3) + 3;
        const color = `hsla(${hue}, 100%, 61%, 0.9)`;
        this.timerBar.style.setProperty('--current-color', color);
    }

    timeUp() {
        this.isRunning = false;
        this.remaining = 0;
        cancelAnimationFrame(this.animationFrame);
        this.updateTimerBar();
        
        // Dispatch custom event when time is up
        const timeUpEvent = new CustomEvent('timeUp');
        document.dispatchEvent(timeUpEvent);
    }

    getTimeRemaining() {
        return this.remaining;
    }

    isActive() {
        return this.isRunning;
    }
}

export default Timer;