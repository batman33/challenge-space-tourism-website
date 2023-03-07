export function getImg(image: string): URL {
  return new window.URL(image, import.meta.url)
}
