//For images we need to import the Duke Library named "SimpleImage"
//or just run the code on the Duke's IDE created
// https://www.dukelearntoprogram.com//course1/example/index.php



//Rampup Exercise for loops and conditions


//Exercise 01

//var img = new SimpleImage("chapel.png");
//print(img);

//for (var pixel of img.values()) {
//    pixel.setRed(255);
//}

//print(img);



//Exercise 02

//var img = new SimpleImage('chapel.png');
//print(img);

//for (var pixel of img.values()){
//    pixel.setRed(0);
//}
//print(img);



//Execise 03

//var img = new SimpleImage('eastereggs.jpg');
//print(img);

//for (var pixel of img.values()) {
//    if (pixel.getRed()>70){
//        pixel.setRed(70);
//    }
//}

//print(img);



//Exercise 04

//var img = new SimpleImage('astrachan.jpg');
//print(img);

//var height = img.getHeight();
//for (var pixel of img.values()){
//    if (height - pixel.getY() < 10){ //(pixel.getY() >= height-10)
//        pixel.setRed(0);
//        pixel.setGreen(0);
//        pixel.setBlue(0);
//    }
//}
//print(img)



//Exercise 05

//var img = new SimpleImage('chapel.png');
//print(img);

//for (var pixel of img.values()) {
//    if (pixel.getX() < 50) {
//        if (pixel.getY() < 50) {
//            pixel.setRed(0);
//            pixel.setGreen(255);
//            pixel.setBlue(0);
//        }
//    }
//}
//print(img);



//Exercise 06

//function topRightCorner(cornerWidth, cornerHeight, someImage, red, green, blue) {
//    var width = someImage.getWidth();
//    for (var pixel of someImage.values()){
//        if(pixel.getY() < cornerHeight){
//            if (pixel.getX() > (width-cornerWidth)){
//                pixel.setRed(red);
//                pixel.setGreen(green);
//                pixel.setBlue(blue);
//            }
//        }
//    }
//    return someImage;
//}

//var img = new SimpleImage('chapel.png');
//print(img);
//img = topRightCorner(30,60,img,255,255,0);
//print(img);

//var img2 = new SimpleImage('smalllion.jpg');
//print(img2);
//result2 = topRightCorner(125,20,img2,255,0,0);
//print(result2);


//Exercise 07

//function ChangedRed(width, height){
//    var img = new SimpleImage(width, height);
//    var red = 0;
//    for (var pixel of img.values()){
//        pixel.setRed(red);
//        pixel.setGreen(0);    //200
//        pixel.setBlue(0);     //100
//        if (pixel.getRed() == 255){
//            red = 0;
//      }
//        if (pixel.getRed() < 255){
//            red = red+1;
//        }
//    }
//    return img;
//}

//var result = ChangedRed(256,200);
//print(result);



//Exercise 08