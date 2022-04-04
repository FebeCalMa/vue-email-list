console.log("JS OK!");

/*
Attraverso l'apposita API di Boolean
https://flynn.boolean.careers/exercises/api/random/mail
generare 10 indirizzi email e stamparli
in pagina all'interno di una lista.

Bonus
Far comparire gli indirizzi email
solamente quando sono stati tutti generati.
*/

const app = new Vue({
  el: "#app",
  data: {
    mailRandom: 1,
  },
  mounted() {
    console.log("Mail generate", this.mailRandom);
    //Mail generator
    axios
      .get("https://flynn.boolean.careers/exercises/api/random/mail")
      .then((response) => {
        const result = response.data;
        console.log(this.mailRandom, result.response);
        //this.mailRandom = result.success ? result.response : -1;
      });
  },
});
