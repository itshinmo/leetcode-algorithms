// eslint-disable-next-line eslint-comments/disable-enable-pair
/* eslint-disable no-console */

const SEPARATOR = ":";

export const stringToBase64 = (...args: string[]): string => {
  return Buffer.from(`${args.join(SEPARATOR)}`).toString("base64");
};

export const base64ToString = (
  text: string,
  authenticating = false
): string[] => {
  if (authenticating && !text.startsWith("Basic ")) {
    console.error("Invalid `text` for decoding a Base64 code!");
    return [];
  }

  const encodedText = authenticating ? text.slice("Basic ".length) : text;

  let decodedText: string;

  try {
    decodedText = Buffer.from(encodedText, "base64").toString("utf8");
  } catch {
    console.error("Error when decoding `text`!");
    return [];
  }

  const decodedArr = decodedText.split(SEPARATOR);

  return decodedArr;
};
