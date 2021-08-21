const button = function () {
  return "button"
}

class Slider {
  constructor(width, height, count) {
    this.width = width,
    this.height = height,
    this.count = count
  }
  nextSlide() {
    console.log("Moving forward")
  }
  prevSlide() {
    console.log("Moving back")
  }
  whoAmI () {
    console.log(this.width, this.height, this.count)
  }
}

const slider = new Slider(600, 400, 5);
const someSlider = new Slider(300,450, 10);
slider.whoAmI();
someSlider.whoAmI();

export{button, Slider}

