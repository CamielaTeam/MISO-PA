const compareImages = require("resemblejs/compareImages");
const fs = require("fs");
const path = require("path");

const options = {
  output: {
    errorColor: {
      red: 255,
      green: 0,
      blue: 255,
    },
    errorType: "movement",
    largeImageThreshold: 1920,
    useCrossOrigin: false,
    outputDiff: true,
  },
  scaleToSameSize: true,
  ignore: "antialiasing",
};

async function compareCypress() {
  const datetime = new Date().toISOString().replace(/:/g, ".");
  fs.mkdirSync(`./vrt/${datetime}`, { recursive: true });

  //TODO: Falta anadir eliminar page
  const funcionalities = [
    "PageCreate",
    "PageDelete",
    "PostCreate",
    "PostEdit",
    "PostDelete",
  ];
  const paths = {
    newVersionPageCreate:
      "./cypress/screenshots/NewVersionPage.feature/create-a-page-successfully",
    oldVersionPageCreate:
      "./cypress/screenshots/Page.feature/create-a-page-successfully",
    newVersionPageDelete:
      "./cypress/screenshots/NewVersionPage.feature/delete-a-page",
    oldVersionPageDelete: "./cypress/screenshots/Page.feature/delete-a-page",
    newVersionPostCreate:
      "./cypress/screenshots/NewVersionPost.feature/create-a-post-successfully",
    oldVersionPostCreate:
      "./cypress/screenshots/Post.feature/create-a-post-successfully",
    newVersionPostEdit:
      "./cypress/screenshots/NewVersionPost.feature/edit-a-published-post",
    oldVersionPostEdit:
      "./cypress/screenshots/Post.feature/edit-a-published-post",
    newVersionPostDelete:
      "./cypress/screenshots/NewVersionPost.feature/delete-a-published-post",
    oldVersionPostDelete:
      "./cypress/screenshots/Post.feature/delete-a-published-post",
  };
  for (const functionality of funcionalities) {
    const stepsInfo = [];
    fs.mkdirSync(`./vrt/${datetime}/${functionality}`, { recursive: true });
    fs.mkdirSync(`./results/${datetime}/${functionality}`, { recursive: true });
    const oldVersionPath = paths[`oldVersion${functionality}`];
    const newVersionPath = paths[`newVersion${functionality}`];

    const oldImages = fs.readdirSync(oldVersionPath);
    const newImages = fs.readdirSync(newVersionPath);

    for (const index in oldImages) {
      const data = await compareImages(
        `${oldVersionPath}/${oldImages[index]}`,
        `${newVersionPath}/${newImages[index]}`,
        options
      );

      fs.writeFileSync(
        `./vrt/${datetime}/${functionality}/compare-${functionality}-${oldImages[index]}`,
        data.getBuffer()
      );

      stepsInfo.push({
        isSameDimensions: data.isSameDimensions,
        dimensionDifference: data.dimensionDifference,
        rawMisMatchPercentage: data.rawMisMatchPercentage,
        misMatchPercentage: data.misMatchPercentage,
        diffBounds: data.diffBounds,
        analysisTime: data.analysisTime,
        oldImage: path.resolve(
          __dirname,
          `${oldVersionPath}/${oldImages[index]}`
        ),
        newImage: path.resolve(
          __dirname,
          `${newVersionPath}/${newImages[index]}`
        ),
        comparationImage: path.resolve(
          __dirname,
          `./vrt/${datetime}/${functionality}/compare-${functionality}-${oldImages[index]}`
        ),
      });
    }
    fs.copyFileSync(
      "./index.css",
      `./results/${datetime}/${functionality}/index.css`
    );
    fs.writeFileSync(
      `./results/${datetime}/${functionality}/report.html`,
      createReport(datetime, functionality, stepsInfo)
    );
  }
}

function scenario(info) {
  const imagesInfo = {
    oldImage: info.oldImage,
    newImage: info.newImage,
    comparationImage: info.comparationImage,
  };
  delete info.oldImage;
  delete info.newImage;
  delete info.comparationImage;

  const stepTokens = imagesInfo.oldImage.split("/");
  const stepNameArr = stepTokens[stepTokens.length - 1].split("-");
  stepNameArr.shift();
  const stepName = stepNameArr.join(" ").split(".")[0];

  return `<div class=" browser" id="test0">
    <div class=" btitle">
        <h2>Browser: Chrome</h2>
        <h3>Step: ${stepName}</h3>
        <p>Data: ${JSON.stringify(info)}</p>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Reference</span>
        <img class="img2" src=${
          imagesInfo.oldImage
        } id="refImage" label="Reference">
      </div>
      <div class="imgcontainer">
        <span class="imgname">Test</span>
        <img class="img2" src=${
          imagesInfo.newImage
        } id="testImage" label="Test">
      </div>
    </div>
    <div class="imgline">
      <div class="imgcontainer">
        <span class="imgname">Diff</span>
        <img class="imgfull" src=${
          imagesInfo.comparationImage
        } id="diffImage" label="Diff">
      </div>
    </div>
  </div>`;
}

function createReport(datetime, functionalityName, info) {
  return `
    <html>
        <head>
            <title> VRT Report </title>
            <link href="index.css" type="text/css" rel="stylesheet">
        </head>
        <body>
            <h1>Report for ${functionalityName} on Ghost v4.41.3 (old) and v3.42 (new)
            </h1>
            <p>Executed: ${datetime}</p>
            <div id="visualizer">
                ${info.map((register) => scenario(register))}
            </div>
        </body>
    </html>`;
}

async function main() {
  await compareCypress();
}

main();
