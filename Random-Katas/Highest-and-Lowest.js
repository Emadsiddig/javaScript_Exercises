function highAndLow(numbers) {
  const nums = numbers.trim().split(/\s+/).map(Number);

  if (nums.length === 0) return "0 0";

  const smallest = Math.min(...nums);
  const greatest = Math.max(...nums);

  return `${greatest} ${smallest}`;
}

console.log(highAndLow("1 2 2 3 4 55 4"));