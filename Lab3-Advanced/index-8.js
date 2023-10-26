/*The following DigitalClock class uses an interval to print the time every second once started, until stopped.

a) Create a new class PrecisionClock that inherits from DigitalClock and adds the parameter precision – the number of ms between 'ticks'. This precision parameter should default to 1 second if not supplied.

b) Create a new class AlarmClock that inherits from DigitalClock and adds the parameter wakeupTime in the format hh:mm. When the clock reaches this time, it should print a 'Wake Up' message and stop ticking. This wakeupTime parameter should default to 07:00 if not supplied.*/


class DigitalClock {
  constructor(prefix) {
  this.prefix = prefix;
  }
  display() {
  let date = new Date();
  //create 3 variables in one go using array destructuring
  let [hours, mins, secs] = [date.getHours(), date.getMinutes(), date.getSeconds()];
  if (hours < 10) hours = '0' + hours;
  if (mins < 10) mins = '0' + mins;
  if (secs < 10) secs = '0' + secs;
  console.log(`${this.prefix} ${hours}:${mins}:${secs}`);
  }
  stop() {
  clearInterval(this.timer);
  }
  start() {
  this.display();
  this.timer = setInterval(() => this.display(), 1000);
  }
  }
  const myClock = new DigitalClock('my clock:')
  //myClock.start()
  //setTimeout(() =>myClock.stop(), 3000);
  
  //(a)
  class PrecisionClock extends DigitalClock{
    constructor(prefix, precision){//precision = 1000 sets default as 1000. then just write this.presition = presition; below.
      super(prefix);
      this.precision = precision ? precision : 1000;
    }
    display(){
      let date = new Date();
      let [hours, mins, secs, ms] = [date.getHours(), date.getMinutes(), date.getSeconds(), date.getMilliseconds()];
      if (hours < 10) hours = '0' + hours;
      if (mins < 10) mins = '0' + mins;
      if (secs < 10) secs = '0' + secs;
      console.log(`${this.prefix} ${hours}:${mins}:${secs}:${ms}`);
    }
    start() {
      this.display();
      this.timer = setInterval(() => this.display(), this.precision);
      }
    }
    const myPrecisionClock = new PrecisionClock('my precision clock', 800);
    
    
    // myPrecisionClock.start();
    // setTimeout(() =>myPrecisionClock.stop(), 1000)

    //(b)
    class AlarmClock extends DigitalClock {
      constructor(prefix, wakeuptime){ // wakeuptime = '07:00' and this.wakeuptime = wakeuptime; below.
        super(prefix);
        this.wakeuptime = wakeuptime ? wakeuptime : '07:00';
     }
      checkTime(){
        let currentTime = new Date();
        let wakeHours = this.wakeuptime.substring(0, 2) //to make hours and mins 'hh" and 'mm'
        let wakeMins = this.wakeuptime.substring(3)
        if(currentTime.getHours()== wakeHours && currentTime.getMinutes()== wakeMins){ // only number needs to be the same so == not ===, otherwise does not work
          console.log('Wake Up!');
          this.stop()
        } else {
          this.display();
        }
      }
      
      start(){
        this.checkTIme();
        this.timer = setInterval(()=> this.checkTime(), 1000); 
      }
    }

    let myAlarm = new AlarmClock('my alarm' , '12:07')
    myAlarm.start();