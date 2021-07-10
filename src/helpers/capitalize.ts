export function capitalize(word: string) {
    if (word.length === 0) return word;

    if (word.length === 1) return word[0].toUpperCase();

    return word[0].toUpperCase() + word.slice(1);
}
