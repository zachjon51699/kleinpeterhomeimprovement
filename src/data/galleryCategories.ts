/**
 * Gallery categories: list image numbers under each category.
 *
 * To fix a mis-categorized photo:
 * 1. Open the Gallery page and click the photo to open the modal.
 * 2. Note the "Image #N" at the bottom of the modal.
 * 3. In this file, move that number from its current category array to the correct one.
 *
 * Image files are image1.avif, image2.avif, ... (image12 and image53 are missing).
 * Images not listed in any category are not shown in the gallery.
 */
export const GALLERY_BY_CATEGORY: Record<string, number[]> = {
  Patios: [5, 7, 8, 11, 13, 17, 20, 22, 32, 33, 34, 39, 42, 43, 46, 47, 48, 49, 50, 51, 52, 54, 55, 56, 57, 58, 59],
  Pergolas: [6, 9, 37],
  Gutters: [14, 23, 24],
  Remodeling: [25, 26, 27, 28, 29],
};

/** Builds image number -> category map from GALLERY_BY_CATEGORY. */
export function getImageCategories(): Record<number, string> {
  const map: Record<number, string> = {};
  for (const [category, numbers] of Object.entries(GALLERY_BY_CATEGORY)) {
    for (const num of numbers) {
      map[num] = category;
    }
  }
  return map;
}
