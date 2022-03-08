export const getDate = (value) => {
  const date = new Date(value);
  const displayDate = `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
  return displayDate;
};

export const isMobile = () => {
  if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
    return true;
  }
  return false;
};
