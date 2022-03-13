import { host } from "configs.js";

export const DisplayImg = ({ data }) => {
  // get link file;
  const relatedData = data ? JSON.parse(data) : {};
  const listFileId = relatedData.image;

  const urlGetFile = `${host}/files/`;
  if (listFileId && Array.isArray(listFileId) && listFileId.length) {
    return listFileId.map((fileId) => {
      return (
        <div key={fileId}>
          <img height={300} width={380} src={`${urlGetFile}${fileId}`} alt="#" />
        </div>
      );
    });
  }
  return null;
};
