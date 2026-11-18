function lengthOfLastWord(s) {
  const trimmed = s.trim();
  if (trimmed === "") {
    return 0;
  }
  const words = trimmed.split(/\s+/);
  return words[words.length - 1].length;
}
function isAnagram(str1, str2) {
  const normalize = (str) =>
    str.toLowerCase().replace(/\s+/g, "").split("").sort().join("");
  return normalize(str1) === normalize(str2);
}
console.log(lengthOfLastWord("Hello World"));
console.log(lengthOfLastWord("   fly me   to   the moon  "));
console.log(isAnagram("listen", "silent"));
console.log(isAnagram("hello", "world"));
