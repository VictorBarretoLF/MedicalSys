import axios from "axios";

const updatePatient = () => {};

const deletePatient = () => {};

const createPatient = async (data) => {
  try {
    const res = await axios.post("http://localhost:8000/api/", data, {
      headers: {
        "Content-Type": "application/json",
        accept: "application/json",
      },
    });
    if (res.status === 201) {
      // adicionar para poder mostrar os cards novos
    }
  } catch (error) {
    console.log("AN ERROR OCURRED");
  }
};
