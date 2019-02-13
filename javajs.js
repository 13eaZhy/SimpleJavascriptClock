class Clock{
  constructor(){
    var time = new Date();
    this.h = time.getHours();
    this.m = time.getMinutes();
    this.s = time.getSeconds();
    this.d = time.getDate();
    this.h = checkTime(this.h);
    this.m = checkTime(this.m);
    this.s = checkTime(this.s);
    this.d = checkTime(this.d);
  }
  render(){
    let html =
    `<div class="clock">
      <div class="brand"><p><h3>${c.d}</h3></p></div>
      <div class="ramka"></div>
      <div class="watch"></div>
        <div class="hours">
          ${c.h} : ${c.m} : ${c.s}
        </div>
      </div>`;

    document.write(html);
  }
}

let c = new Clock();
c.render();

function checkTime(i){
  if (i<10){
    i = "0" + i
  };
  return i;
}
