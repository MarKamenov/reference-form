import { FormState } from "src/types";
import { formDataTransform } from "src/utils/forms";

export const saveReferenceForm = async (formData: FormState) => {
  const data = formDataTransform(formData)
  // url is fake
  const response = await fetch("https://httpbin.org/anything", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
  if (!response.ok) {
    const error = await response.json();
    throw error;
  }

  return response.json();
}
