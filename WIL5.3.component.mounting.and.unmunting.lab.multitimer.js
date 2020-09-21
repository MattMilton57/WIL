{1}
// in reat remember that you dont need to put parenthesis (for instering variables) on callback functions. hit a
// bit of a wall for about 20 minutes on this lab with this sang. here is the line that was giving me trouble:
    this.interval = setInterval(this.clockTick,1000)
// clockTick is the function that I wass calling back to. I kept on writing it as:
    this.interval = setInterval(this.clockTick(),1000)
// good to know how to write a clearInterval function as well. 


