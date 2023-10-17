import { test, expect } from '@jest/globals';
import { getSymbol, removeDigit, isSquare, numberLength, flipOver } from '../src/functions.js';

test('getSymbol', () => {
  expect(getSymbol('The members', 4)).toEqual('m');
  expect(getSymbol('type can in', 1)).toEqual('y');
  expect(getSymbol('an error', 20)).toEqual('');
  expect(getSymbol('qwerty', 0)).toEqual('q');
  expect(getSymbol('QwErTy', 0)).toEqual('Q');
  expect(getSymbol('', 0)).toEqual('');
});

test('removeDigit', () => {
  expect(removeDigit(208)).toBe(28);
  expect(removeDigit(109)).toBe(19);
  expect(removeDigit(940)).toBe(90);
  expect(removeDigit(123)).toBe(13);
  expect(removeDigit(567)).toBe(57);
});

test('isSquare', () => {
  expect(isSquare(2, 4)).toBeTruthy();
  expect(isSquare(81, 9)).toBeTruthy();
  expect(isSquare(25, 125)).toBeFalsy();
  expect(isSquare(-3, 9)).toBeTruthy();
  expect(isSquare(16, -4)).toBeTruthy();
});

test('numberLength', () => {
  expect(numberLength(123)).toBe(3);
  expect(numberLength(3)).toBe(1);
  expect(numberLength(19283)).toBe(5);
  expect(numberLength(1001010101)).toBe(10);
  expect(numberLength(1)).toBe(1);
});

test('flipOver', () => {
  expect(flipOver('hello')).toEqual('olleh');
  expect(flipOver('swap')).toEqual('paws');
  expect(flipOver('John Doe')).toEqual('eoD nhoJ');
  expect(flipOver('qWeRt')).toEqual('tReWq');
  expect(flipOver('1029384756')).toEqual('6574839201');
});
