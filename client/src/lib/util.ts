export function currencyFormat(amout: number) {
  return "$" + (amout / 100).toFixed(2);
}
