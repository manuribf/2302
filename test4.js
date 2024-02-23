let nums = [5, 10, 15, 20, 25]
let maior = nums[0]
for (let i = 0; i < nums.length; i++) {
    if (nums[i] > maior ) {
        maior = nums[i]
    }
}
console.log("O maior num é: " + maior)