import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["counter"];
  static values = { limit: Number };

  connect() {
    console.log(this.element);
    console.log(this.counterTarget);
  }

  updateCounter(event) {
    const numberOfCharacters = event.currentTarget.value.length;

    if (numberOfCharacters > this.limitValue) {
      const excessCharacters = numberOfCharacters - this.limitValue;
      const characterLabel = excessCharacters === 1 ? "character" : "characters";
      this.counterTarget.innerHTML = `Number of characters exceeded by ${excessCharacters} ${characterLabel}`;
    } else if (numberOfCharacters > 0) {
      const remainingCharacters = this.limitValue - numberOfCharacters;
      const characterLabel = remainingCharacters === 1 ? "character" : "characters";
      this.counterTarget.innerHTML = `${remainingCharacters} ${characterLabel} left`;
    } else {
      this.counterTarget.innerHTML = "";
    }
  }
}
