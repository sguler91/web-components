const template = document.createElement("template")
template.innerHTML = `
<style> @import "components/movieCard/movieCard.css"; </style>
<div class="movie-container">
  <div class="image-container">
    <a href="" class="btn1" target="_blank"><img src="" alt=""></a>
  </div>
  <div class="info">
    <a href="" class="btn" target="_blank"><h3 class="title"></h3></a>
    <p><slot /></p>
  </div>
</div>
`;

class MovieCard extends HTMLElement {
    constructor() {
        super();
        this.showDetail = false;

        this.attachShadow({mode: 'open'})
        this.shadowRoot.appendChild(template.content.cloneNode(true));

        setTimeout(() => {
            this.shadowRoot.querySelector("h3.title").innerHTML = this.getAttribute("title");
            this.shadowRoot.querySelector("img").src = this.getAttribute("poster");
            this.shadowRoot.querySelector(".title").classList.add("open");
            this.shadowRoot.querySelector(".btn").setAttribute("href", `https://imdb.com/title/${this.getAttribute("imdbID")}`);
            this.shadowRoot.querySelector(".btn1").setAttribute("href", `https://imdb.com/title/${this.getAttribute("imdbID")}`);
        }, 100);

    }

    detailToggle() {
        this.showDetail = !this.showDetail;
        if(this.showDetail) {
            this.shadowRoot.querySelector(".title").classList.add("opened");
        } else {
            this.shadowRoot.querySelector(".title").classList.remove("opened");
        }
    }

    connectedCallback() {
        this.shadowRoot.querySelector(".title").addEventListener("click", () => this.detailToggle());
    }

    disconnectedCallback() {
        this.shadowRoot.querySelector(".title").removeEventListener("click", () => this.detailToggle());
    }

}


window.customElements.define("movie-card", MovieCard)