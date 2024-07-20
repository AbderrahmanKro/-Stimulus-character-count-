import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ["counter"];

  connect() {
    console.log(this.element);
    console.log(this.counterTarget);
  }

  updateCounter(event) {
    const numberOfCharacters = event.currentTarget.value.length;
    if (numberOfCharacters > 0) {
      const characterLabel = numberOfCharacters === 1 ? "character" : "characters";
      this.counterTarget.innerHTML = `${numberOfCharacters} ${characterLabel}`;
    } else {
      this.counterTarget.innerHTML = "";
    }
  }
}
