
import { LitElement, html, css } from 'lit';


export class CardComponent extends LitElement{


    // host is all the component
    static styles = [css` 
    :host{
        display:block;
    }

    h2{
  font-size: 3rem;
    }

    .my-card{
    position: relative;
    width: 300px;
    height:400px;
    color: white;   }

    .my-card .card-content {
    border-radius: 5%;
    width: 100%;
    height: 100%;
    position: absolute;
    display: flex;
    flex-wrap: 20px;
    justify-content: center;
    align-items: center;
    backface-visibility: hidden;
    transition: 0.8s;
    text-align: center;
    color: white;
    box-shadow: rgba(0, 0, 0, 0.5) 3px 3px;
    }
    

    .my-card .front {
        font-family: 'Anton',
        sans-serif;
    background-color: #E6D500;
        transform: perspective(500px) rotateY(0deg);
        text-shadow: black 1px 1px;
    }

    .my-card .back {
    background-color: #F18A00;
    transform: perspective(500px) rotateY(180deg);
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content:space-around;
    text-align: left;
    word-wrap: break-word;
    }

    .my-card .back p{
        text-align:justify;
        padding:0px 10px;
    }


    .my-card:hover .front {
        transform: perspective(500px) rotateY(180deg);
    }

    .my-card:hover .back {
        transform: perspective(500px) rotateY(360deg);
    }

    code{
    background-color: #e6d500;
    color: #F18A00;
    font-weight: bolder;
    }

    .links{
        width: 100%;
        display:flex;
        gap: 30px;
        justify-content: center;
    }


    `];

    static  properties = {
        card_name: {
            type: String,
            reflect: true //update DOM CONTENT
        },
        card_content: {
            type: String,
            reflect: true
        },
        card_example_code: {
            type: String,
            reflect: true
        },

        card_href: {
            type: String,
            reflect: true
        },

        script_name: {
            type: String,
            reflect: true
        }
    }

    get_all_elements(e) {
            try {

                let script = document.createElement("script");
                script.type = 'text/javascript'
                script.async = true;
                script.src = `scripts/${this.script_name}`;
                let s = document.getElementsByTagName("script")[0].appendChild(script);
                s.parentNode.insertBefore(script, s);
                
            } catch (error) {
                alert(error);
            }
    }
    constructor() {
        super();
        this.card_name = "MY OWN CARD";
        this.card_content = "MY CARD CONTENT";
        this.card_example_code = `let example = "some example code"; `;
        this.card_href = "#"
        this.card_script_name = null;
    }


    render() {
        return html`
            <div class="my-card">
                <div class="card-content front">
                        <h2>${this.card_name}</h2>
                </div>
                <div class="card-content back">
                        <p>${this.card_content}</p>
                        
                        <code>${this.card_example_code}</code>
                        
                <div class="links">
                    <a href="${this.card_href}" target="_blank" rel="noopener noreferrer">
                        <slot name="github_icon"></slot>            
                    </a>
                    <a href="#subject0" class="execute-button" @click=${this.get_all_elements}>
                        <slot name="play_icon"></slot>
                    </a>
                </div>
                        
                </div>
            </div>

            
        `;
    };


}
 
 customElements.define('card-component', CardComponent);
