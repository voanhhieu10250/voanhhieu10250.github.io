export default function publicURL(str: string | undefined): string | undefined {
    if (str) return process.env.PUBLIC_URL + "/images/" + str;
    return undefined
};
