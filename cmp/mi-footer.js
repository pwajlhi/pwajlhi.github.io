class MiFooter extends HTMLElement {
  connectedCallback() {
    this.innerHTML = /* html */
      `Copyright &copy; Hernández Izquierdo José Luis`;
  }
}
customElements.define("mi-footer", MiFooter);
