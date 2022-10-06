import { emojiProvider } from "../../../lib/index.js"

/**
 * Defines template.
 */
const template = document.createElement('template')
template.innerHTML = `
  <div id='emojis'>
    <button id='emoji-button'>😊</button>
    <div id='emoji-container'></div>
  </div>
  <style>
    #emojis {
      position: absolute;
    }
    #emoji-button {
      width: 40px;
      height: 40px;
      border: none;
      padding-top: 3px;
      border-radius: 2px;
      border-radius: 10px;
      font-size: 2.3rem;
      cursor: pointer;
      background-color: rgb(237, 237, 237, 0);
    }
    #emoji-button:hover {
      background-color: #333;
    }
    #emoji-button:focus {
      background-color: #333;
      outline: none;
    }
    #emoji-container {
      position: absolute;
      width: 210px;
      max-height: 180px;
      left: -145px;
      top: -190px;
      display: flex;
      flex-wrap: wrap;
      background-color: white;
      border-radius: 0px 10px 10px 10px;
      overflow: scroll;
      box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    }
    .emoji {
      width: 30px;
      height: 30px;
      text-decoration: none;
      border: black;
      background-color: white;
      cursor: pointer;
    }
    .emoji:hover {
      background-color: #ededed;
    }
    .emoji:focus {
      background-color: #ededed;
      outline: none;
    }
    .hidden {
      display: none !important;
    }
  </style>
`

/*
 * Defines custom element.
 */
customElements.define('my-emojis',
  class extends HTMLElement {
    #emojiContainer

    constructor () {
      super()
      this.attachShadow({ mode: 'open' })
        .appendChild(template.content.cloneNode(true))
      this.#emojiContainer = this.shadowRoot.querySelector('#emoji-container')
      this.shadowRoot.querySelector('#emoji-button').addEventListener('click', event => this.#openAndCloseEmojiContainer(event))
    }

    connectedCallback() {
      this.generateEmojis(emojiProvider.getEmojis())
    }

    /**
     * Generates the emojis and add them to the parent element.
     *
     * @param {string[]} emojiArray 
     */
    generateEmojis(emojiArray) {
      this.#emojiContainer.textContent = ''
      for (const emoji of emojiArray) {
        const emojiButton = document.createElement('button')
        emojiButton.classList.add('emoji')
        emojiButton.textContent = emoji
        this.#emojiContainer.appendChild(emojiButton)
      }
      this.shadowRoot.querySelectorAll('.emoji').forEach(emoji => emoji.addEventListener('click', event => {
        event.preventDefault()
        this.dispatchEvent(new CustomEvent('clicked', 
          { 
            detail: 
              { 
                emojiValue: emoji.textContent 
              } 
          }))
      }))
    }

    /**
     * Opens the emoji container if the container is not active, otherwise closes it.
     *
     * @param {Event} event The click event.
     */
    #openAndCloseEmojiContainer (event) {
      event.preventDefault()
      if (!this.#emojiContainer.hasAttribute('active')) {
        this.#emojiContainer.setAttribute('active', '')
        this.#emojiContainer.classList.remove('hidden')
      } else {
        this.#emojiContainer.removeAttribute('active')
        this.#emojiContainer.classList.add('hidden')
        event.target.blur()
        this.dispatchEvent(new CustomEvent('closed'))
      }
    }
  }
)
