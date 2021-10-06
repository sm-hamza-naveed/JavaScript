//creating 200x200 images of yellow color

var img = new SimpleImage(200,200);
print(img, 'New Image');

//Yellow = (255,255,0)
for (var pixels of img.values()) {
    pixels.setRed(255);
    pixels.setGreen(255);
}

print(img, 'Yellow Image');

//Magenta = (255,0,255)
for (var pixels of img.values()) {
    pixels.setGreen(0);
    pixels.setBlue(255);
}

print(img, 'Magenta Image')