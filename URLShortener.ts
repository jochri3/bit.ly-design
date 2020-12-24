import StringUtils from './StringUtils';

export default class URLShortener {
  private static BASE_URL: string = 'https://bit.ly/';

  public static createShortURL(
    longURL: string,
    shortURLSDatabase: Map<string,string>
  ): string {
    const baseURLDomaineName = this.BASE_URL.replace(/[/]/g, '').split(':')[1];
    if (longURL.includes(baseURLDomaineName))
      throw Error(
        `You cannot generate short url from ${this.BASE_URL} domaine name`
      );

    const randomString = StringUtils.generateRandomString(8);
    if (!shortURLSDatabase.has(randomString)) {
      shortURLSDatabase.set(randomString, longURL);
    }

    return `${this.BASE_URL + randomString}`;
  }

  public static retreiveURL(shortURL: string, shortURLSDatabase: Map<string,string>): string {
    const urlString: string = shortURL.split('/').pop()!;
    if (shortURLSDatabase.has(urlString)) {
      return shortURLSDatabase.get(urlString)!;
    } else {
      return 'Not found';
    }
  }
}
