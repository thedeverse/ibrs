import * as filestack from "filestack-js";

function getExtensionFromContentType(contentType) {
  const mimeToExt = {
    "image/jpeg": ".jpeg",
    "image/jpg": ".jpg",
    "image/png": ".png",
    "image/gif": ".gif",
    "image/webp": ".webp",
    "image/bmp": ".bmp",
  };
  return mimeToExt[contentType] || ".jpg";
}

export async function downloadImage(imageUrl, fileNameBase = "downloaded-image") {
  try {
    const response = await fetch(imageUrl, { mode: "cors" });
    if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
    const blob = await response.blob();
    const blobUrl = URL.createObjectURL(blob);

    const contentType = response.headers.get("Content-Type");
    const extension = getExtensionFromContentType(contentType);
    const fileName = `${fileNameBase}${extension}`;

    const link = document.createElement("a");
    link.href = blobUrl;
    link.setAttribute("download", fileName);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setTimeout(() => URL.revokeObjectURL(blobUrl), 1000);
  } catch (error) {
    console.error("Error downloading image:", error);
  }
}

export async function downloadPdf(fileUrl, fileName = "downloaded-iitbhilai.pdf") {
  try {
    const response = await fetch(fileUrl);
    const blob = await response.blob();
    const url = window.URL.createObjectURL(blob);

    const a = document.createElement("a");
    a.href = url;
    a.download = fileName;
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    window.URL.revokeObjectURL(url);
  } catch (error) {
    console.error("Error downloading the file:", error);
  }
}



export const handleImageChange = (e, setImage) => {
  const file = e.target.files[0];
  if (file) {
    if (file.size > 20 * 1024 * 1024) {
      console.log("File size must be less than 20 MB");
      return;
    }
    setImage(file);
  }
};


export const handlePdfChange = (e, setPdf) => {
  const file = e.target.files[0];
  if (file) {
    setPdf(file);
  }
};

export const handleImageUpload = async (image) => {
  const client = filestack.init(process.env.REACT_APP_FILESTACK_API_KEY);
  let url=null;
  await client.upload(image).then((response) => {
    url = response.url;
  }).catch((err) => {
    console.error("Upload failed: ", err);
  });
  return url;
};

export const handlePdfUpload = async (pdf) => {
  const client = filestack.init(process.env.REACT_APP_FILESTACK_API_KEY);
  let url=null;
  await client.upload(pdf).then((response) => {
    url = response.url;
  }).catch((err) => {
    console.error("Upload failed: ", err);
  });
  return url;
};