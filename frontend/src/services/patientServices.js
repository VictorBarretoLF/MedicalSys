import axios from "axios";

export const updatePatient = async (data, patientId) => {
  console.log(data, patientId);
  try {
    const res = await axios.put(
      `http://localhost:8000/api/${patientId}/`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          accept: "application/json",
        },
      }
    );
    return res;
  } catch (error) {
    alert("Um erro aconteceu!");
  }
};

export const deletePatient = () => {};

export const createPatient = async (data) => {
  try {
    const res = await axios.post("http://localhost:8000/api/", data, {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });

    return res;
  } catch (error) {
    alert("Um erro aconteceu!");
  }
};
