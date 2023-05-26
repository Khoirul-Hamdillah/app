//search engine
function search() {
			var keyword = document.getElementById("searchInput").value;
			var searchEngine = document.getElementById("searchEngine").value;

			if (searchEngine === "google") {
				window.location.href = "https://www.google.com/search?q=" + keyword;
			} else if (searchEngine === "bing") {
				window.location.href = "https://www.bing.com/search?q=" + keyword;
      } else if (searchEngine === "yandex") {
				window.location.href = "https://yandex.com/search/touch/?text=" + keyword;
      } else if (searchEngine === "DuckDuckGo") {
				window.location.href = "https://duckduckgo.com/search/?q=" + keyword;
			} else {
				alert("Pilih mesin pencari terlebih dahulu!");
			}
		}
		
		//bot JSON

const inputBox = document.querySelector('.input-area input');
const chatArea = document.querySelector('.chat-area');
const commands = [
    { command: 'hi', response: 'Hallo, apa yang bisa bisa saya bantu hari ini?' },
    { command: 'hallo', response: 'Hallo, ada yang bisa saya bantu?' },
    { command: 'bagaiamana kabarmu', response: 'maaf, saya adalah bot yang tidak bisa memiliki sebuah perasaan.' },
    { command: 'siapa namamu', response: 'nama saya ask bot.' },
    { command: 'apa yang bisa anda lakukan?', response: 'saya bisa membantu anda menjawab beberapa pertanyaan.' },
    { command: 'help', response: 'apa yg bisa saya bantu?' },
    { command: 'woi anj', response: `kalo berani sini anj by one serlok aja!` }
];

document.querySelector('#send-btn').addEventListener('click', function(e) {
    e.preventDefault();
    sendMessage();
});

inputBox.addEventListener('keyup', function(e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        sendMessage();
    }
});

function sendMessage() {
    let userText = inputBox.value.trim();
    if (userText !== '') {
        inputBox.value = '';
        let userHtml = `<div class="chat-box user"><p>${userText}</p></div>`;
        chatArea.insertAdjacentHTML("beforeend", userHtml);
        chatArea.scrollTop = chatArea.scrollHeight;
        botResponse(userText);
        inputBox.focus();
    }
}

function botResponse(userText) {
    setTimeout(function() {
        let response = '';
        for (let i = 0; i < commands.length; i++) {
            if (userText.toLowerCase().includes(commands[i].command)) {
                response = commands[i].response;
                break;
            }
        }

        if (response !== '') {
            botHtml = `<div class="chat-box bot"><p>${response}</p></div>`;
        }else{
            botHtml = `<div class="chat-box bot"><p>Maaf saya tidak mengerti!?</p></div>`;
        }
        chatArea.insertAdjacentHTML("beforeend", botHtml);
        chatArea.scrollTop = chatArea.scrollHeight;
    }, 1000);
}

