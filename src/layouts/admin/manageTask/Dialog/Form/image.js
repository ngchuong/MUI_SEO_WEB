export const DisplayImg = () => {
  const img = document.getElementById("idImg");
  if (img) {
    const files = img.files;

    const srcImg = [];
    for (let i = 0; i < files.length; i += 1) {
      const src = files[i] ? URL.createObjectURL(files[i]) : "";
      srcImg.push(src);
    }

    return srcImg.map((src) => {
      return (
        <div key={src} style={{ margin: "2px 10px" }}>
          <img width={200} height={400} src={src} alt="#" />
        </div>
      );
    });
  }

  return null;
};
