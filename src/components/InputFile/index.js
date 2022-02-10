let base64 = "";
export const onChangeInput = (e) => {
  const file = e.target.files[0];

  const reader = new FileReader();
  reader.onload = () => {
    base64 = reader.result.replace("data:", "").replace(/^.+,/, "");
  };
  reader.readAsDataURL(file);
};

const onSubmit = () => {
  const image = new Image();

  image.width = 100;
  image.height = 100;
  image.src = `data:image/jpg;base64,${base64}`;
  document.body.appendChild(image);
};

export const InputFile = () => (
  <div>
    <input type="file" onChange={onChangeInput} />
    <button type="button" onClick={onSubmit}>
      button
    </button>
  </div>
);
