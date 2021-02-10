export default function publicURL(str: string): string {
    return process.env.PUBLIC_URL + "/images/" + str
};
