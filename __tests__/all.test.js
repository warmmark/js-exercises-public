import { test, expect } from '@jest/globals';

test('getSymbol', async () => {
  const functions = await import('../src/functions.js');
  if (functions.getSymbol) {
    expect(functions.getSymbol('The members', 4)).toEqual('m');
    expect(functions.getSymbol('type can in', 1)).toEqual('y');
    expect(functions.getSymbol('an error', 20)).toEqual('');
    expect(functions.getSymbol('qwerty', 0)).toEqual('q');
    expect(functions.getSymbol('QwErTy', 0)).toEqual('Q');
    expect(functions.getSymbol('', 0)).toEqual('');
  } else {
    expect().toThrowError();
  }
});

test('removeDigit', async () => {
  const functions = await import('../src/functions.js');
  if (functions.removeDigit) {
    expect(functions.removeDigit(208)).toBe(28);
    expect(functions.removeDigit(109)).toBe(19);
    expect(functions.removeDigit(940)).toBe(90);
    expect(functions.removeDigit(123)).toBe(13);
    expect(functions.removeDigit(567)).toBe(57);
  } else {
    expect().toThrowError();
  }
});

test('isSquare', async () => {
  const functions = await import('../src/functions.js');
  if (functions.isSquare) {
    expect(functions.isSquare(2, 4)).toBeTruthy();
    expect(functions.isSquare(81, 9)).toBeTruthy();
    expect(functions.isSquare(25, 125)).toBeFalsy();
    expect(functions.isSquare(-3, 9)).toBeTruthy();
    expect(functions.isSquare(16, -4)).toBeTruthy();
  } else {
    expect().toThrowError();
  }
});

test('numberLength', async () => {
  const functions = await import('../src/functions.js');
  if (functions.numberLength) {
    expect(functions.numberLength(123)).toBe(3);
    expect(functions.numberLength(3)).toBe(1);
    expect(functions.numberLength(19283)).toBe(5);
    expect(functions.numberLength(1001010101)).toBe(10);
    expect(functions.numberLength(1)).toBe(1);
  } else {
    expect().toThrowError();
  }
});

test('flipOver', async () => {
  const functions = await import('../src/functions.js');
  if (functions.flipOver) {
    expect(functions.flipOver('hello')).toEqual('olleh');
    expect(functions.flipOver('swap')).toEqual('paws');
    expect(functions.flipOver('John Doe')).toEqual('eoD nhoJ');
    expect(functions.flipOver('qWeRt')).toEqual('tReWq');
    expect(functions.flipOver('1029384756')).toEqual('6574839201');
  }
  else {
    expect().toThrowError();
  }
});
