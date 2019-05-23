let isBigInt

/**
 * Slightly modified version of https://github.com/ljharb/is-bigint
 */
if (typeof BigInt === 'function') {
	let bigIntValueOf = BigInt.prototype.valueOf;
	let tryBigInt = function tryBigIntObject(value) {
		try {
			bigIntValueOf.call(value);
			return true;
		} catch (e) {
		}
		return false;
	};

	isBigInt = function isBigInt(value) {
		if (
			value === null
			|| typeof value === 'undefined'
			|| typeof value === 'boolean'
			|| typeof value === 'string'
			|| typeof value === 'number'
			|| typeof value === 'symbol'
			|| typeof value === 'function'
		) {
			return false;
		}
		if (typeof value === 'bigint') { // eslint-disable-line valid-typeof
			return true;
		}

		return tryBigInt(value);
	};
} else {
	isBigInt = function isBigInt(value) {
		return false && value;
	};
}

export default function divide(a, b) {
  if (isBigInt(a) && ! isBigInt(b))
    return divide(a, BigInt(b))
  if (! isBigInt(a) && isBigInt(b))
    return divide(BigInt(a), b)
  const div = a / b
  return parseFloat(div)
    + parseFloat(a - (div * b)) / parseFloat(b)
}

