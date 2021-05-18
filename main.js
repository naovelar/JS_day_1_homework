// SUM THE STRINGS
/* python version
// def sum_str(a, b):
if a == "":
a = 0
if b == "":
b = 0
a = int(a)
b = int(b)
c = a + b
return  str(c)

print(sum_str("4", "5"))
print(sum_str("34", "5"))
*/

// javascript version

function sumStr(a,b) {
    return String(Number(a)+Number(b));
  }

// SQUARE (N) SUM
/* python version
def square_sum(numbers):
    x = lambda a: a**2
    return sum(list(map(x, numbers)))
*/

// javascript version

function squareSum(numbers){
    return numbers.reduce(function(sum, n){
      return (n*n) + sum;
    }, 0)
  }  