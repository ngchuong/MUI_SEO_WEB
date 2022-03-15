export const getDate = (value) => {
  const date = new Date(value);
  const displayDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  return displayDate;
};

export const getValueInput = (e) => {
  let value;
  if (e && e.target) {
    const checked = e.target.checked;
    if (typeof checked === "boolean") {
      value = checked;
    } else {
      value = e.target.value;
    }
  } else {
    value = e;
  }
  return value;
};

export const isMobile = () => {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return true;
  }
  return false;
};

export const copyToClipBoard = (text) => navigator.clipboard.writeText(text);

export const copyToClipBoardOld = (id) => {
  if (document.selection) {
    const range = document.body.createTextRange();
    range.moveToElementText(document.getElementById(id));
    range.select().createTextRange();
    document.execCommand("copy");
  } else if (window.getSelection) {
    const range = document.createRange();
    range.selectNode(document.getElementById(id));
    window.getSelection().addRange(range);
    document.execCommand("copy");
  }
};
