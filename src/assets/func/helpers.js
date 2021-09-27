const randomChoice = (arr) => {
  const a = arr[Math.floor(Math.random() * arr.length)];
  return a;
};

export { randomChoice };
