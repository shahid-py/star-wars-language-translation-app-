var btnTranslate = document.getElementById('btn-translate');
var inputText = document.getElementById('input-text');
var translatedText = document.getElementById('translated-text');
var mandalorian = document.getElementById('mandalorian');
var sith = document.getElementById('sith');


var url = {
  mandalorianURL: "https://api.funtranslations.com/translate/mandalorian.json",
  sithURL: "https://api.funtranslations.com/translate/sith.json",
};


var serverURL = "";

// add text parameter to url
function addTextParametertoURL(textParameter) {
  var encodedURI = encodeURIComponent(textParameter);

  if (serverURL === '') {
    alert("Please select a language");
  }

  return `${serverURL}?text=${encodedURI}`;
}

// fetches the api
function clickHandler() {
    var textParameter = inputText.value;
    var finalURL = addTextParametertoURL(textParameter);
    console.log(finalURL)
  
    if (textParameter.length === 0) {
      alert("You need to type a sentence!");
    } else if (/^\d+$/.test(textParameter)) {
      alert("You need to include letters in your sentence");
    } else {
      fetch(finalURL)
      .then(response => response.json())
      .then(json => {
        translatedText.value = json.contents.translated;
      })
      .catch(error => console.log("Error encountered!", error));
    }
  }

  // event listeners

btnTranslate.addEventListener('click', clickHandler);

mandalorian.addEventListener('click', () => {
  serverURL = url.mandalorianURL;
});

sith.addEventListener('click', () => {
  serverURL = url.sithURL;
});
