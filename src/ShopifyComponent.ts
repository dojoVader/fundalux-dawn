
class ShopifyComponent extends HTMLElement {
  constructor() {
    super();

    // Let's find the button and attach a text
    const button: HTMLButtonElement = this.querySelector('button');
    if(button){
      button.textContent = 'Buy now';
    }

    this.addEventListener('click', (e:MouseEvent) => {

      // We attached a custom click to a component
      alert('You clicked on a ShopifyComponent');

      e.preventDefault();
      e.stopPropagation()
    });
  }
}

customElements.define('shopify-component', ShopifyComponent);
