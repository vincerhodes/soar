const FitParser = require("../fitparse/fit-parser").default;

// Create a FitParser instance (options argument is optional)
const fitParser = new FitParser({
  force: true,
  speedUnit: "km/h",
  lengthUnit: "km",
  temperatureUnit: "kelvin",
  elapsedRecordField: true,
  mode: "both",
});

export const ReadFit = (file) => {
  var result = "";
  fitParser.parse(file, function (error, data) {
    // Handle result of parse method
    if (error) {
      console.log(error);
    } else {
      result = data;
    }
  });
  return result;
};

export const ReadFile = (file, onLoadCallback) => {
  var reader = new FileReader();
  reader.onload = onLoadCallback;
  reader.readAsArrayBuffer(file);
};

export const ReadFileMultiple = (files, onLoadCallback) => {
  //Get the files
  let file = [...files] || [];
  file.forEach((item, index) => {
    let reader = new FileReader();
    reader.onloadend = onLoadCallback;
    reader.readAsArrayBuffer(file[index]);
  });
};
