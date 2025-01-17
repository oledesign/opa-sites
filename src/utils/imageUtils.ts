const images = [
  '/images/hero/pmr-1.jpg',
  '/images/hero/pmr-2.jpg',
  '/images/hero/pmr-3.jpg',
  '/images/hero/pmr-4.jpg',
  '/images/hero/pmr-5.jpg',
];

export const getRandomImage = (): string => {
  const randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
};