var rowsList = [];

var rowHighlight = function (e, id, child, backColor, foreColor) {
  let Rows = document.querySelectorAll(id + " " + child);
  let Word = e;

  if (rowsList.length !== Rows.length) {
    rowsList = Array.from(Rows);
  }

  rowsList.forEach((element) => {
    console.log(element.innerText);
    if (Word.trim() !== "") {
      if (element.innerText.includes(Word)) {
        setColor(element, backColor, "back", true);
        searchNode(element, foreColor, Word);
      } else {
        setColor(element, backColor, "back", false);
        searchNode(element, foreColor, Word);
      }
    } else {
      setColor(element, backColor, "back", false);
      searchNode(element, foreColor, Word);
    }
  });
};

var searchNode = function (element, color, word) {
  if (word.trim() !== "") {
    Array.from(element.cells).forEach((item) => {
      Array.from(item.children).forEach((itemNode) => {
        if (itemNode.innerText.includes(word)) {
          setColor(itemNode, color, "fore", true);
        } else {
          setColor(itemNode, color, "fore", false);
        }
      });
    });
  } else {
    Array.from(element.cells).forEach((item) => {
      Array.from(item.children).forEach((itemNode) => {
        if (itemNode.innerText.includes(word)) {
          setColor(itemNode, color, "fore", false);
        }
      });
    });
  }
};

var setColor = function (element, colorValue, styleTag, isPaint) {
  switch (styleTag) {
    case "back":
      if (isPaint) {
        element.bgColor = colorValue;
      } else {
        element.bgColor = "";
      }
      break;
    case "fore":
      if (isPaint) {
        element.style.color = colorValue;
      } else {
        element.style.color = "";
      }
      break;
  }
};
