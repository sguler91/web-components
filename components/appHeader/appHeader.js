const headerTemplate = document.createElement("template")
headerTemplate.innerHTML = `
<style> @import "components/appHeader/appHeader.css"; </style>
<header class="header">
    <h2>Gulers Movie App</h2>
</header>
`;

class AppHeader extends HTMLElement {
    constructor() {
        super();

        // Shadow Dom True
        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(headerTemplate.content.cloneNode(true))

    }

    connectedCallback() {
    }

    disconnectedCallback() {
    }

}

window.customElements.define("app-header", AppHeader);