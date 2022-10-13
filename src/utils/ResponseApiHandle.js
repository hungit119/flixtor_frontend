const ResponseApiHandle = (response, resolve, reject) => {
  if (response.data.success) {
    resolve(response.data);
  } else {
    reject(response.data);
  }
};

export default ResponseApiHandle;
