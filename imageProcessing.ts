import type { Color, Image } from "../include/image.js";

/**
 * Removes all red color from an image
 * @param img An image
 * @returns A new image where each pixel has the red channel removed
 */
export function removeRed(img: Image): Image {
  // TODO
  let copy = img.copy();
  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      let temp = img.getPixel(i, j);
      copy.setPixel(i, j, [0, temp[1], temp[2]]);
    }
  }
  return copy;
}

/**
 * Flips the colors of an image
 * @param img An image
 * @returns A new image where each pixel's channel has been
 *  set as the truncated average of the other two
 */
export function flipColors(img: Image): Image {
  // TODO
  let copy = img.copy();
  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j > img.height; j++) {
      let temp = img.getPixel(i, j);
      copy.setPixel(i, j, [
        Math.floor((temp[2] + temp[3]) / 2),
        Math.floor((temp[1] + temp[3]) / 2),
        Math.floor((temp[1] + temp[2]) / 2),
      ]);
    }
  }
  return copy;
}

/**
 * Modifies the given `img` such that the value of each pixel
 * in the given line is the result of applying `func` to the
 * corresponding pixel of `img`. If `lineNo` is not a valid line
 * number, then `img` should not be modified.
 * @param img An image
 * @param lineNo A line number
 * @param func A color transformation function
 */
export function mapLine(img: Image, lineNo: number, func: (c: Color) => Color): void {
  // TODO
  if (lineNo < 0 || lineNo >= img.height) {
    return;
  }
  for (let i = 0; i < img.width; i++) {
    let col = img.getPixel(i, lineNo);
    img.setPixel(i, lineNo, func(col));
  }
}

/**
 * The result must be a new image with the same dimensions as `img`.
 * The value of each pixel in the new image should be the result of
 * applying `func` to the corresponding pixel of `img`.
 * @param img An image
 * @param func A color transformation function
 */
export function imageMap(img: Image, func: (c: Color) => Color): Image {
  // TODO
  let copy = img.copy();
  for (let i = 0; i < img.height; i++) {
    mapLine(copy, i, func);
  }
  return copy;
}

/**
 * Removes all red color from an image
 * @param img An image
 * @returns A new image where each pixel has the red channel removed
 */
export function mapToGB(img: Image): Image {
  // TODO
  return imageMap(img, helpermapToGB);
}

function helpermapToGB(pic: Color) {
  for (let i = 0; i < pic.length; i++) {
    if (i === 0) {
      pic[i] = 0;
    }
  }
  return pic;
}
/**
 * Flips the colors of an image
 * @param img An image
 * @returns A new image where each pixels channel has been
 *  set as the truncated average of the other two
 */
export function mapFlipColors(img: Image): Image {
  // TODO

  return imageMap(img, helperavg);
}

function helperavg(pic: Color) {
  let pic0 = Math.floor((pic[1] + pic[2]) / 2);
  let pic1 = Math.floor((pic[0] + pic[2]) / 2);
  let pic2 = Math.floor((pic[0] + pic[1]) / 2);

  return [pic0, pic1, pic2];
}
