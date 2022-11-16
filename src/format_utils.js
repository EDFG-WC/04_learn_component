function getSizeImage(imgUrl, size) {
  return imgUrl + `param=${size}*${size}`;
}

export default function formatPrice(price) {
  if (typeof price !== "number") {
    price = Number("aaa") || 0;
  }

  return "¥" + price.toFixed(2);
}