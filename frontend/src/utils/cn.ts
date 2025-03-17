export default function cn(...cns: string[]) {
    return cns.filter(Boolean).join(" ");
}