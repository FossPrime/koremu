const koremutake = require('koremutake')
const winston = require('winston')
const crypto = require('crypto')

winston.add(
  new winston.transports.Console({
    format: winston.format.simple()
  })
)

const NS = 'koremu'

winston.debug('initiating')
// koremu.encode((parseInt(crypto.randomBytes(6).toString("hex"),16))))

function genPass () {
  const randSrt = parseInt(crypto.randomBytes(6).toString("hex"),16)
  const rand = parseInt(randSrt)
  return koremutake.encode(rand)
}

module.exports = genPass
