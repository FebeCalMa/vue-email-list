console.log("JS OK!");

//link introdotto dalla comunicazione esercizio
axios
  .get("https://flynn.boolean.careers/exercises/api/random/mail")
  .then(function (response) {
    const result = response.data;
    console.log(result);
  });
