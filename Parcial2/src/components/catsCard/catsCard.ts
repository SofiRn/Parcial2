import styles from './catsCard.css';
import '../../services/secondFetch'
export enum Attribute {
	'image' = 'image',
	'text' = 'text',
}

class Cat extends HTMLElement {
	image?: string;
    text?: string;
	

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	static get observedAttributes() {
		const attrs: Record<Attribute, null> = {
			image: null,
            text: null

			
		};
		return Object.keys(attrs);
	}

	attributeChangedCallback(propName: Attribute, oldValue: string | undefined, newValue: string | undefined) {
		switch (propName) {
			default:
				this[propName] = newValue;
				break;
		}
		this.render();
	}

	connectedCallback() {
		this.render();
	}

	render() {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
      <section>
      <div>
      <img src= ${this.image}/>
      <p>${this.text}</p>
      
      </section>
      `;
		}
		const cssCat = this.ownerDocument.createElement('style');
		cssCat.innerHTML = styles;
		this.shadowRoot?.appendChild(cssCat);
	}
}

export default Cat;
customElements.define('my-cat', Cat);
