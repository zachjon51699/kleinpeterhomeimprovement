/**
 * Images in public folder per service. Folder names match public/ subfolders.
 * Add new filenames here when you add images to a folder.
 *
 * For clear carousel display: use images at least 1200px wide (e.g. 1200×600 or 1600×800).
 * Low-resolution images will look blurry when shown in the carousel.
 */
export const SERVICE_GALLERY_IMAGES: Record<string, { folder: string; files: string[] }> = {
  gutters: {
    folder: 'gutter installation',
    files: [
      '0011736e9add475ba0b2cda114dc92f8.avif',
      '2e6098_107b3ed7ce1e49dca2e04bdbf3c68f27~mv2.avif',
      '2e6098_941b35432f90424cbc8aa0427e7391b7~mv2.avif',
      '2e6098_9c93df94452c4376801adc88c4ca1f55~mv2.avif',
      '2e6098_cc491a8eea704c239634a9abfe5bedc0~mv2.avif',
      '2e6098_eacf09c812d24575a913c1958f14a67f~mv2.avif',
    ],
  },
  patios: {
    folder: 'patio installation',
    files: [
      '2e6098_079355ca7ee54ff3bbdac98adae447d4~mv2.avif',
      '2e6098_17d270f7c1f3415e8dfdf4cd2125e1c8~mv2.avif',
      '2e6098_2cf94313be864ec487b6aa83326d3726~mv2.avif',
      '2e6098_3990db13992e42728a953192b7e064ea~mv2.avif',
      '2e6098_4564612e9d4f4d6296217617800f5011~mv2.avif',
      '2e6098_5ed435883bb844eba1f0dcdb3e07ba53~mv2.avif',
      '2e6098_60d78715fb00457d936ae7a7f2f3d59d~mv2.avif',
      '2e6098_a523d77e3b4f4edca905b5064d7ec2a3~mv2.avif',
      '2e6098_b49e5f5586654dffa5c99b3ce17aa0ae~mv2.avif',
      '2e6098_bc9e8a190b374d209c2991bdfd120ee7~mv2.avif',
      '2e6098_c4e492452c5144c385cb7f838366e61a~mv2.avif',
      '2e6098_c98592631b124f0db0b87361dc1cd343~mv2.avif',
      '2e6098_cdeaf615ea784babb39db902ec2416a8~mv2.avif',
      '2e6098_fb00eb7df7754466a772a9eeffcea254~mv2.avif',
    ],
  },
  pergolas: {
    folder: 'pergola installation',
    files: [
      '2e6098_123973ec1ae141619f8b06f3d9c382b3~mv2.avif',
      '2e6098_23a8e58092b54286803f35497ff9f5e3~mv2.avif',
      '2e6098_269d48d8df8943a6aee52dea6af5db87~mv2.avif',
      '2e6098_4fcb7e50db1a4403b2d5d647e13d99db~mv2.avif',
      '2e6098_5ed435883bb844eba1f0dcdb3e07ba53~mv2.avif',
      '2e6098_6cfcc50ece664f038d3c2e72a7d980b7~mv2.avif',
      '2e6098_99f18975a1344e20a4395225e6b30e36~mv2.avif',
      '2e6098_dd4e0340d1114454bf2005e3422f1f89~mv2.avif',
      '2e6098_e299cf4375a74a63a0bacf6f42fbd528~mv2.avif',
    ],
  },
  screenedEnclosures: {
    folder: 'screened enclosures',
    files: [
      '2e6098_09e56972a71148cfb7a6b5f8c7f21a1f~mv2.avif',
      '2e6098_37fbb6f897b94ebe8a636c57e00f1e2e~mv2.avif',
      '2e6098_66ace71ec1104fdda15bfa7a6fff8058~mv2.avif',
      '2e6098_7a5ad29ea38241a98713b4d5b8acd77c~mv2.avif',
      '2e6098_92374b8242fa41fb924cc0002b6853e7~mv2.avif',
      '2e6098_a43022a7fc2a46b79a5a251cfd6aa7f4~mv2.avif',
      '2e6098_add3b28c7c0b4d2fafe543e86038c47a~mv2.avif',
      '2e6098_da6b5aac41324a21a01535e73a1d62f8~mv2.avif',
      '2e6098_dd4e0340d1114454bf2005e3422f1f89~mv2.avif',
      '2e6098_f81ca52b71514c42b911c234a77906da~mv2.avif',
    ],
  },
  pressureWashing: {
    folder: 'pressure washing',
    files: [
      '2e6098_470a4e2fd6d64334b8c66400945a4e27~mv2.avif',
      '7962d75b0be14c2f836b958c1a58f09d.avif',
      'bccb7dec5d8846a4800d10a140a02d84.avif',
    ],
  },
  fence: {
    folder: 'fence installation',
    files: [
      '2e6098_7be58edd65794cfca3cc969174c7bbfc~mv2.avif',
      '2e6098_bf01a288d0f448e18e5e2f2c6aa93413~mv2.avif',
    ],
  },
  paint: {
    folder: 'paint',
    files: [
      '11062b_f09330616e284fe0819f5c3fdc21f7e6~mv2.avif',
      '91bbf6172899422ab9800d84e755af4e.avif',
    ],
  },
  decks: {
    folder: 'deck installation',
    files: [
      '2e6098_0059bf206ee149c999834f9852085b39~mv2.avif',
      '2e6098_d2241a7cb7104af196a918c39de0380c~mv2.avif',
      '4bae6d8c83e744958780351ea53fb5d9.avif',
    ],
  },
};

export function getServiceGalleryUrls(serviceKey: keyof typeof SERVICE_GALLERY_IMAGES): string[] {
  const config = SERVICE_GALLERY_IMAGES[serviceKey];
  if (!config) return [];
  const base = typeof import.meta !== 'undefined' && import.meta.env ? import.meta.env.BASE_URL : '/';
  return config.files.map((f) => `${base}${encodeURI(config.folder)}/${encodeURI(f)}`);
}
