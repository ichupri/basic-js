const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  constructor(direction = true) {
    this.direction = direction
  }

  encrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    let messUp = message.toUpperCase();
    let keyUp = key.toUpperCase();
    let text = ''
    let keycounter = 0;
    let char;

    for (let i = 0; i < messUp.length; i++) {
      if (messUp[i].codePointAt() >= 65 && messUp[i].codePointAt() <= 90) {
        char = (messUp[i].codePointAt() + keyUp[keycounter].codePointAt()) % 26
        text += String.fromCodePoint(65 + char)
        keycounter++
        if (keycounter == keyUp.length) {
          keycounter = 0
        }
      } else {
        char = messUp[i].codePointAt()
        text += String.fromCodePoint(char)
      }
    }
    if (this.direction) return text
    else return text.split('').reverse().join('')
  }

  decrypt(message, key) {
    if (!message || !key) throw new Error('Incorrect arguments!');
    let messUp = message.toUpperCase();
    let keyUp = key.toUpperCase();
    let text = ''
    let keycounter = 0;
    let char;

    for (let i = 0; i < messUp.length; i++) {

      if (messUp[i].codePointAt() >= 65 && messUp[i].codePointAt() <= 90) {
        char = (messUp[i].codePointAt() + 26 - keyUp[keycounter].codePointAt()) % 26
        text += String.fromCodePoint(65 + char)
        keycounter++
        if (keycounter == keyUp.length) {
          keycounter = 0;
        }
      } else {
        char = messUp[i].codePointAt();
        text += String.fromCodePoint(char);
      }
    }

    if (this.direction) return text;
    else return text.split('').reverse().join('');
  }
}

module.exports = {
  VigenereCipheringMachine
};
