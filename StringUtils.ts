export default class StringUtils {
  public static createAlphaNumericTable(): string[] {
    let alpha = 'abcdefghijklmnopqrstuvwxyz';
    return (alpha + alpha.toUpperCase() + '123456789').split('');
  }

  public static generateRandomString(size: number): string {
    let str = '';
    const asciiAplhaNumeric = this.createAlphaNumericTable();
    for (let count = 1; count <= size; count++) {
      str += asciiAplhaNumeric[Math.floor(Math.random() * size + 1)];
    }
    return str;
  }
}
