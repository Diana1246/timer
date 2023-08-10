class CountdownTimer {
  constructor({ selector, targetDate }) {
    this.targetDate = new Date(targetDate).getTime();
    this.timerRef = document.querySelector(selector);
    this.daysRef = this.timerRef.querySelector('[data-value="days"]');
    this.hoursRef = this.timerRef.querySelector('[data-value="hours"]');
    this.minsRef = this.timerRef.querySelector('[data-value="mins"]');
    this.secsRef = this.timerRef.querySelector('[data-value="secs"]');

    this.start();
  }

  start() {
    this.updateTimer();

    this.intervalId = setInterval(() => {
      this.updateTimer();
    }, 1000);
  }

  updateTimer() {
    const currentTime = new Date().getTime();
    const time = this.targetDate - currentTime;

    if (time <= 0) {
      this.stop();
      return;
    }

    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    this.daysRef.textContent = days;
    this.hoursRef.textContent = hours;
    this.minsRef.textContent = mins;
    this.secsRef.textContent = secs;
  }

  stop() {
    clearInterval(this.intervalId);
    this.timerRef.textContent = 'Timer Expired';
  }
}

 
new CountdownTimer({
  selector: '#timer-1',
  targetDate: '2023-08-16',  
});
