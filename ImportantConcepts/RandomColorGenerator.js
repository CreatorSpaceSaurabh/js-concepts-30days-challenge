// Utility to create random color generator

const hexValue = "1234567890abcdef";

const colorCodeGenerator = () => {
  try {
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += hexValue[Math.floor(Math.random() * 16)];
    }
    return color;
  } catch (error) {
    console.log("Error in colorCodeGenerator", error);
  }
};

const colorCode = colorCodeGenerator();
console.log("Random color code -", colorCode);
