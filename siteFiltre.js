var image = null;
var canvas = document.getElementById("id_can_img1");

function loadImage() {
  img = document.getElementById("id_loadImage");
  image = new SimpleImage(img);
  image.drawTo(canvas);
}

function redFilter() {
  if (image == null) {
    alert("missing picture");
  }
  for (var pixel of image.values()) {
    pixel.setRed(255);
  }
  image.drawTo(canvas);
} // End of function redFilter

function grayscaleFilter() {
  if (image == null) {
    alert("missing picture");
  }
  for (var pixel of image.values()) {
    var average = (pixel.getRed() + pixel.getGreen() + pixel.getBlue()) / 3;
    pixel.setRed(average);
    pixel.setGreen(average);
    pixel.setBlue(average);
  }
  image.drawTo(canvas);
} // End of function grayscaleFilter

