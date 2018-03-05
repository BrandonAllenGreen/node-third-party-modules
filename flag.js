#!/usr/bin/env node
'use strict';

const chalk = require('chalk');

// code is working but needs refactor
const redStripe = chalk.bgRed('                                                  \n') //50 length
const whiteStripe = chalk.bgWhite('                                                  \n') //50 length
const sevenStars = chalk.white.bgBlue(' * * * * * * * ')
const sixStars = chalk.white.bgBlue('  * * * * * *  ')
const shortRedStripe = chalk.bgRed('                                   \n') //35 length
const shortWhiteStripe = chalk.bgWhite('                                   \n') //35 length

const USFlag = () => {
  let a = sevenStars + shortRedStripe;
  let b = sixStars + shortWhiteStripe;
  let c = redStripe;
  let d = whiteStripe;
  let topPattern = a + b + a + b + a + b + a;
  let bottomPattern = d + c + d + c + d + c;
  console.log(`${topPattern}${bottomPattern}`);
}
  

USFlag();



