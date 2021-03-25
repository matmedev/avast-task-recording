export const min = (arr) => {
  if (arr.length) {
    let min = Number.MAX_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  } else {
    return null;
  }
};

export const max = (arr) => {
  if (arr.length) {
    let max = Number.MIN_SAFE_INTEGER;
    for (let i = 0; i < arr.length; i++) {
      if (max < arr[i]) {
        max = arr[i];
      }
    }
    return max;
  } else {
    return null;
  }
};
