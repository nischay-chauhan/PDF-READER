# Tesseract JS Demo

In this project i Tried to extract the data from an Image using the Tesseract.js Module. I made a simple Route for uploading the Image and then used Tesseract to extract the content of the image.


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`PORT` =  `Your Port number`


## Run Locally

Clone the project

```bash
  git clone https://github.com/nischay-chauhan/TessrectDemo
```

Go to the project directory

```bash
  cd TessrectDemo
```

Install dependencies

```bash
  npm install
```
### Make Sure You make folder Named Public/upload in the Src directory to handle the uploads of the image

Start the server

```bash
  npm run start
```



## API Reference

#### POST IMAGE ROUTE

```
  POST http://localhost:<PORT>/api/image/upload
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `image` | `file` | **Required** : Image to extract data from  |

#### POST PDF ROUTE

```
  POST  http://localhost:<PORT>/api/pdf/upload
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `file`      | `file` | **Required** :  PDF TO extract data from |


## Service Functions

### `extractText(imagePath: string)`

Extracts text from an image file using Tesseract OCR.

| Parameter   | Type     | Description                |
| :---------- | :------- | :------------------------- |
| `imagePath` | `string` | Path to the image file.    |

### `extractPdfText(filePath: string)`

Extracts text from a PDF file.

| Parameter   | Type     | Description                |
| :---------- | :------- | :------------------------- |
| `filePath`  | `string` | Path to the PDF file.      |

Both functions return a promise that resolves with the extracted text or rejects with an error if extraction fails.
