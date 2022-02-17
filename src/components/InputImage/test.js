async function reduce_image_file_size(base64Str, MAX_WIDTH = 450, MAX_HEIGHT = 450) {
  const resized_base64 = await new Promise((resolve) => {
    const img = new Image();
    img.src = base64Str;
    img.onload = () => {
      const canvas = document.createElement("canvas");
      let width = img.width;
      let height = img.height;

      if (width > height) {
        if (width > MAX_WIDTH) {
          height *= MAX_WIDTH / width;
          width = MAX_WIDTH;
        }
      } else if (height > MAX_HEIGHT) {
        width *= MAX_HEIGHT / height;
        height = MAX_HEIGHT;
      }

      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext("2d");
      ctx.drawImage(img, 0, 0, width, height);
      resolve(canvas.toDataURL()); // this will return base64 image results after resize
    };
  });
  return resized_base64;
}

async function image_to_base64(file) {
  const result_base64 = await new Promise((resolve) => {
    const fileReader = new FileReader();
    fileReader.onload = (e) => resolve(fileReader.result);
    fileReader.onerror = (error) => {};
    fileReader.readAsDataURL(file);
  });
  return result_base64;
}

function calc_image_size(image) {
  let y = 1;
  if (image.endsWith("==")) {
    y = 2;
  }
  const x_size = image.length * (3 / 4) - y;
  return Math.round(x_size / 1024);
}

async function process_image(file, min_image_size = 100) {
  const res = await image_to_base64(file);
  if (res) {
    const old_size = calc_image_size(res);
    if (old_size > min_image_size) {
      const resized = await reduce_image_file_size(res);
      const new_size = calc_image_size(resized);
      console.log("new_size=> ", new_size, "KB");
      console.log("old_size=> ", old_size, "KB");
      return resized;
    }
    console.log("image already small enough");
    return res;
  }
  console.log("return err");
  return null;
}

/* - NOTE: USE THIS JUST TO GET PROCESSED RESULTS -*/
async function getSingleImg(files) {
  console.log(files, 1);
  const image = await process_image(files[0]);
  return image;
}

async function getMultipleImg(files) {
  const images = [];
  for (let i = 0; i < files.length; i += 1) {
    const file = await process_image(files[i]);
    images.push(file);
  }
  return images;
}

export const InputImage = ({ handleChange, multiple }) => {
  const onChangeInput = (e) => {
    const files = e.target.files;
    const data = multiple ? getMultipleImg(files) : getSingleImg(files);
    handleChange(data);
  };
  return <input type="file" onChange={onChangeInput} multiple={multiple} />;
};

// credit to: https://gist.github.com/ORESoftware/ba5d03f3e1826dc15d5ad2bcec37f7bf
