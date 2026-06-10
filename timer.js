/**
 * Match Timer/Clock System
 * Handles countdown, count-up, quarters, halves, periods
 */

class MatchTimer {
  constructor() {
    this.interval = null;
    this.isRunning = false;
    this.config = {
      mode: 'count-up', // 'count-up' or 'count-down'
      format: 'halves', // 'quarters', 'halves', 'periods'
      totalDuration: 90, // in minutes
      currentTime: 0,
      currentPeriod: 1,
      isPaused: false
    };
    this.listeners = new Set();
  }

  subscribe(callback) {
    this.listeners.add(callback);
    return () => this.listeners.delete(callback);
  }

  notify() {
    this.listeners.forEach(cb => cb(this.config));
  }

  configure(config) {
    this.config = { ...this.config, ...config };
    this.notify();
  }

  start() {
    if (this.isRunning) return;
    this.isRunning = true;

    this.interval = setInterval(() => {
      if (this.config.isPaused) return;

      if (this.config.mode === 'count-up') {
        this.config.currentTime++;
      } else {
        this.config.currentTime--;
        if (this.config.currentTime <= 0) {
          this.handlePeriodEnd();
        }
      }

      this.notify();
    }, 1000);
  }

  pause() {
    this.config.isPaused = true;
    this.notify();
  }

  resume() {
    this.config.isPaused = false;
    this.notify();
  }

  stop() {
    if (this.interval) clearInterval(this.interval);
    this.isRunning = false;
    this.config.currentTime = 0;
    this.config.currentPeriod = 1;
    this.notify();
  }

  handlePeriodEnd() {
    const periodsPerGame = this.config.format === 'quarters' ? 4 : 2;
    if (this.config.currentPeriod < periodsPerGame) {
      this.config.currentPeriod++;
      // In count-down mode, reset to full duration; in count-up, reset to 0
      this.config.currentTime = this.config.mode === 'count-down' ? (this.config.totalDuration * 60) : 0;
    } else {
      this.stop();
    }
  }

  setCurrentPeriod(period) {
    this.config.currentPeriod = period;
    this.notify();
  }

  setCurrentTime(time) {
    this.config.currentTime = time;
    this.notify();
  }

  getFormattedTime() {
    const minutes = Math.floor(this.config.currentTime / 60);
    const seconds = this.config.currentTime % 60;
    return `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  }

  getPeriodLabel() {
    if (this.config.format === 'quarters') {
      return `Q${this.config.currentPeriod}`;
    } else {
      return `${this.config.currentPeriod === 1 ? '1st' : '2nd'} Half`;
    }
  }
}

window.matchTimer = new MatchTimer();
