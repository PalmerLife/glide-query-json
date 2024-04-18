window.function = function (jsonArray, property, subProperty) {
  // Ensure all parameters are provided
  if (!jsonArray.value || !property.value || !subProperty.value) {
    return undefined;
  }

  // Parse JSON Array
  try {
    let data = JSON.parse(jsonArray.value);

    // Find the value matching the property and subProperty
    if (data && data[0][property.value]) {
      return data[0][property.value][subProperty.value];
    }
  } catch (error) {
    console.error("Error parsing JSON:", error);
  }

  return undefined;
}
