 import stylesIndex from './index.css';
import './components/export'
import catsCard, { Attribute } from './components/catsCard/catsCard';
import { getImage } from './services/firtsFetch';
import { getWord } from './services/secondFetch';
import Cat from './components/catsCard/catsCard';

class AppContainer extends HTMLElement {
	catMemes: any[] = [];

	constructor() {
		super();
		this.attachShadow({ mode: 'open' });
	}

	

    async connectedCallback() {
		const data = await getWord();
        console.log(data)
		this.render(data);
		
	}

	render(data: any) {
		if (this.shadowRoot) {
			this.shadowRoot.innerHTML = `
            <style>
                ${stylesIndex}
                </style>
            <section>
            <h1>Cats Facts</h1>
            
            </section>
			
        `;

                 const css = this.ownerDocument.createElement('style');
                 this.shadowRoot?.appendChild(css);
			

			
				const memeCat = this.ownerDocument.createElement('my-cat') as Cat;
				memeCat.setAttribute(Attribute.text, data);
                memeCat.setAttribute(Attribute.image, data);
			
				this.shadowRoot?.appendChild(memeCat);


			
	}
}
}

customElements.define('app-container', AppContainer);
