function uuid() {
  return URL.createObjectURL(new Blob()).slice(-36);
}

export {uuid};
