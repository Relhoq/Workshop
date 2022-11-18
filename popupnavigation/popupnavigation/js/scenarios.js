let correctAnswer = "fuckyou";

const scenarios = {
  mustConfirm() {
    return confirm("Are you sure?");
  },
  askToTurnBy(angle) {
    let yes = confirm(`Would you like to turn by ${angle}?`);
    if (yes) {
      rotate(angle);
    }
  },
  meteo() {
    let yes = false;
    yes = confirm("Is it raining oustide?");
    if (yes) {
      translate(100, 0);
      let yes = scenarios.mustConfirm();

      if (yes) scenarios.meteo();
    }
  },

  iknow() {
    const answer = prompt("Write the correct answer");

    if (answer === correctAnswer) {
      confirm("Congrats!");
    } else {
      confirm("Nice try");
    }
  },

  start() {},
};
