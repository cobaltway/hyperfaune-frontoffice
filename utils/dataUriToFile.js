module.exports = (dataURI, name) => {
  let byteString;
  if (dataURI.split(',')[0].indexOf('base64') >= 0) { byteString = atob(dataURI.split(',')[1]); }
  else { byteString = unescape(dataURI.split(',')[1]); }

  const mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];

  const ia = new Uint8Array(byteString.length);
  for (let i = 0; i < byteString.length; i++) {
    ia[i] = byteString.charCodeAt(i);
  }

  return new File([new Blob([ia], { type: mimeString })], name, { type: mimeString });
};
