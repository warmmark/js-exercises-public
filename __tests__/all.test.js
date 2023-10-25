import { test, expect } from '@jest/globals';
import * as functions from '../src/functions.js';

/**
 * https://www.codewars.com/kata/55685cd7ad70877c23000102/train/javascript
 */
test('makePositive', async () => {
  if (functions.makePositive) {
    expect(functions.makePositive(1)).toBe(1);
    expect(functions.makePositive(-5)).toBe(5);
    expect(functions.makePositive(0)).toBe(0);
    expect(functions.makePositive(-0.12)).toBe(0.12);
    expect(functions.makePositive(-0.5)).toBe(0.5);
  } else {
    expect().toThrowError();
  }
});

/**
 * https://www.codewars.com/kata/57356c55867b9b7a60000bd7
 */
test('greet', async () => {
  if (functions.greet) {
    expect(functions.greet('John')).toEqual('Hi John!');
    expect(functions.greet('Elise')).toEqual('Hi Elise!');
    expect(functions.greet('qwerty')).toEqual('Hi qwerty!');
    expect(functions.greet('')).toEqual('Hi!');
    expect(functions.greet('foo')).toEqual('Hi foo!');
  } else {
    expect().toThrowError();
  }
});

/**
 * https://www.codewars.com/kata/65128732b5aff40032a3d8f0/train/javascript
 */
test('neutralise', async () => {
  if (functions.neutralise) {
    expect(functions.neutralise('ffttff', 'ttfftt')).toEqual('......');
    expect(functions.neutralise('ftftft', 'ftftft')).toEqual('ftftft');
    expect(functions.neutralise('fttf', 'ftft')).toEqual('ft..');
    expect(functions.neutralise('ttt', 'ftft')).toEqual('-');
    expect(functions.neutralise('ttff', 'fftt')).toEqual('....');
  } else {
    expect().toThrowError();
  }
});

test('getShotFullName', async () => {
  if (functions.getShotFullName) {
    expect(functions.getShotFullName('Oliver', 'Smith')).toEqual('Oliver S.');
    expect(functions.getShotFullName('Jack', 'Johnson')).toEqual('Jack J.');
    expect(functions.getShotFullName('Harry', 'Williams')).toEqual('Harry W.');
    expect(functions.getShotFullName('Jacob', 'Brown')).toEqual('Jacob B.');
    expect(functions.getShotFullName('Charley', 'Jones')).toEqual('Charley J.');
  } else {
    expect().toThrowError();
  }
});

/**
 * https://www.codewars.com/kata/57356c55867b9b7a60000bd7/train/javascript
 */
test('basicOp', async () => {
  if (functions.basicOp) {
    expect(functions.basicOp('1+2')).toBe(3);
    expect(functions.basicOp('3-4')).toBe(-1);
    expect(functions.basicOp('5*60')).toBe(300);
    expect(functions.basicOp('7+8')).toBe(15);
    expect(functions.basicOp('18+902')).toBe(920);
    expect(functions.basicOp('4+7')).toBe(11);
    expect(functions.basicOp('1-2')).toBe(-1);
    expect(functions.basicOp('3*2')).toBe(6);
  } else {
    expect().toThrowError();
  }
});