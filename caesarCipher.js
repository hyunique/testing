function caesarCipher(str,key) {
    let alphabet = ["a", "b", "c", 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    let result = "";
    let string = str.toLowerCase();
    for (let i = 0; i < string.length; i++) {
        if (string[i] !== " ") {
          let index = alphabet.indexOf(string[i]);
          result += alphabet[(index + key) % 26];
        } else {
          result += " ";
        }
      }
    
      return result;
    
}
module.exports = caesarCipher;