/**
 * @param {number} x
 * @return {number}
 */
 
const reverse = function(x) {
 let reversed =  parseFloat(x
                    .toString()
                   .split("")
                   .reverse()
                  .join("")
                  ) * Math.sign(x)
 return reversed < (2**31-1) ? reversed : 0
};
