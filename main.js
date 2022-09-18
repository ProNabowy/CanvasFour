// Selector all elements
let c = document.querySelector("#canvas");
let ctx = c.getContext("2d");
let counter = 0;
// Set Size to canvas Element
c.width = this.innerWidth;
c.height = this.innerHeight;
// Set Size When Window Resize
this.addEventListener("resize", function () {
  c.width = this.innerWidth;
  c.height = this.innerHeight;
});
class Sympol {
  constructor(x, y, fontSize, canvasHeight) {
    this.char =
      "アァカサタナハマヤャラワガザダバパイィキシチニヒミリヰギジヂビピウゥクスツヌフムユュルグズブヅプエェケセテネヘメレヱゲゼデベペオォコソトノホモヨョロヲゴゾドボポヴッン0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    this.x = x;
    this.y = y;
    this.fontSize = fontSize;
    this.canvasHeight = canvasHeight;
    this.text = "";
  };
  darw(context) {
    this.text = this.char.charAt(Math.floor(Math.random() * this.char.length));
    context.fillStyle = 'hsl( ' + counter + ' , 100%, 50%)';
    context.fillText(this.text , this.x * this.fontSize , this.y * this.fontSize);
    if(this.y * this.fontSize > this.canvasHeight && Math.random() > 0.98) {
        this.y = 0;
      }else {
      this.y += 1;
    };
  };
};
// class Effect 
class Effect {
  constructor(canvasWidth , canvasHeight) {
    this.canvasHeight = canvasHeight;
    this.canvasWidth = canvasWidth;
    this.fontSize = 25;
    this.colums = this.canvasWidth / this.fontSize;
    this.sympols = [];
    this.#init();
  };
  #init() {
    for (let i = 0; i < this.colums; i++) {
      this.sympols[i] = new Sympol(i , 0 , this.fontSize , this.canvasHeight);
    };
  };
};
let effect = new Effect(c.width , c.height);
// Create Function To animait Shape
function animait() {
  
  ctx.fillStyle = "rgba( 0 , 0 , 0 , 0.03)";
  ctx.fillRect(0 , 0 , c.width, c.height);
  counter += 2;
  ctx.font = effect.fontSize + "px monspace";
  effect.sympols.forEach(sympol => sympol.darw(ctx));
  requestAnimationFrame(animait);
};
animait();
let obj = {
  1: "Nabowy",
  getdet: function() {
    return `ProNabowy`;
  }
}
console.log(obj["getdet"]());