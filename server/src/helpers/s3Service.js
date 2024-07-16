const {
  DeleteObjectCommand,
  PutObjectCommand,
  S3Client,
} = require("@aws-sdk/client-s3");

const { v4: uuid } = require("uuid");

const bucketName = process.env.AWS_BUCKET_NAME;
const bucketRegion = process.env.AWS_BUCKET_REGION;
const bucketAccessKey = process.env.AWS_ACCESS_KEY_ID;
const bucketSecretAccessKey = process.env.AWS_SECRET_ACCESS_KEY;

const s3Client = new S3Client({
  credentials: {
    accessKeyId: bucketAccessKey,
    secretAccessKey: bucketSecretAccessKey,
  },
  region: bucketRegion,
});

const s3UploadSingle = async (file) => {
  const timestamp = new Date(Date.now()).getTime();

  const { fieldname, mimetype, originalname } = file;

  const param = {
    Bucket: process.env.AWS_BUCKET_NAME,
    Key: `uploads/${fieldname}/${uuid()}-${timestamp}-${originalname}`,
    Body: file.buffer,
    ContentType: file.mimetype,
  };

  const result = await s3Client.send(new PutObjectCommand(param));
  let url;
  if (result.$metadata.httpStatusCode === 200) {
    url = `https://s3.${bucketRegion}.amazonaws.com/${bucketName}/${param.Key}`;
    return { fileName: originalname, contentType: mimetype, url };
  } else {
    throw new Error("Error uploading file");
  }
};

module.exports = { s3UploadSingle };
