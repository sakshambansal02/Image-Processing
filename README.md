# Image-Processing

I'm excited to share my image processing project with you! This repository contains a TypeScript-based application that I've developed to explore and demonstrate basic image manipulation techniques. It's a passion project of mine, reflecting my interest in digital image processing and software development. My aim was to create a modular and easily integrable set of functions that can be used in larger applications requiring basic image processing capabilities.

<br> 

Features:
<br>
Here are some of the key features I've implemented:
<br> 
<br> 
Remove Red: 
I've developed a function that effectively removes the red color channel from an image, turning any red tones into grayscale. This is great for artistic effects or color isolation.
<br> 
Flip Colors: This function alters each pixel's color by averaging the values of the other two channels, creating interesting and sometimes unexpected visual effects.
<br> 
Map Line: This feature applies a transformation to each pixel in a specified line of the image, allowing for line-based image alterations.
<br> 
Image Map: One of my favorite features, this generates a new image based on a pixel-wise transformation function applied to an original image. It's incredibly versatile for various creative endeavors.
<br> 
Map to Green and Blue (GB): Here, I specifically applied the Image Map to remove the red channel, focusing only on the green and blue channels.
<br> 
Map Flip Colors: This applies a color-flipping transformation across the entire image, which can produce some really cool effects!
<br> 



Testing:

Functionality Tests: For each image processing function (removeRed, flipColors, etc.), I have written specific tests to validate their expected behavior. These tests involve applying the function to a predefined image and comparing the output to an expected result.

Edge Cases: I have also included tests for edge cases, such as processing an empty image or applying transformations to specific pixel ranges, to ensure that the functions handle unusual inputs gracefully.

Performance Tests: While these are more rudimentary, I have also included some basic performance tests to ensure that the functions perform optimally, even with larger images.
