function triangleType(triangleToy) {
  const trianglePossibleTypes = {
    isosceles: "Isosceles",
    equilateral: "Equilateral",
    none: "None of these",
  };
  const results = triangleToy.map((triangle) => {
    const sideArray = triangle.split(" ").map((side) => parseInt(side));
    const sideCounts = sideArray.reduce((acc, curr) => {
      acc[curr] = (acc[curr] || 0) + 1;
      return acc;
    }, {});
    const numOfEquals = Object.values(sideCounts).sort((a, b) => b - a)[0];
    if (numOfEquals === 3) {
      return trianglePossibleTypes.equilateral;
    } else if (numOfEquals === 2) {
      const sortedSides = sideArray.sort((a, b) => a - b);
      if (sortedSides[0] + sortedSides[1] < sortedSides[2]) {
        return trianglePossibleTypes.none;
      }
      return trianglePossibleTypes.isosceles;
    } else {
      return trianglePossibleTypes.none;
    }
  });
  return results;
}

const result = triangleType([
  "49 49 49",
  "48 16 48",
  "48 99 48",
  "12 12 12",
  "41 41 15",
]);
console.log(result);
