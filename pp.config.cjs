const indexSections = [
    { section: 'hero', misMatchThreshold: 1 },
    { section: 'about', misMatchThreshold: 1 },
    { section: 'price', misMatchThreshold: 1 },
    { section: 'games', misMatchThreshold: 1 },
    { section: 'features', misMatchThreshold: 1 },
    { section: 'offers', misMatchThreshold: 1 },
    { section: 'faq', misMatchThreshold: 1 },
    { section: 'reviews', misMatchThreshold: 1 },
    { section: 'footer', misMatchThreshold: 1 }
  ];
  
  module.exports = {
    "id": "supergym test-06",
    "viewports": [
      {
        "label": "desktop",
        "width": 1366,
        "height": 800,
      },
      {
        "label": "tablet",
        "width": 768,
        "height": 800,
      },
      {
        "label": "mobile",
        "width": 320,
        "height": 800,
      },
    ],
    "onReadyScript": "onReady.cjs",
    "resembleOutputOptions": {
      "ignoreAntialiasing": true,
      "errorType": "movementDifferenceIntensity",
      "transparency": 0.3,
      scaleToSameSize: false
    },
    "scenarios": [
      ...indexSections.map(({ section, misMatchThreshold }) => ({
        "label": `index ${section} TEST-06. PP.`,
        "url": "http://localhost:3000/index.html",
        "referenceUrl": "./figma/index.html",
        selectors: [`[data-test="${section}"]`],
        misMatchThreshold: misMatchThreshold || 5,
        requireSameDimensions: false,
      })),
    ],
    fileNameTemplate: '{configId}_{scenarioIndex}_{scenarioLabel}_{selectorIndex}__{viewportIndex}_{viewportLabel}',
    "paths": {
      "bitmaps_reference": "backstop_data/bitmaps_reference/test-06",
      "bitmaps_test": "backstop_data/bitmaps_test",
      "engine_scripts": "engine_scripts",
      "html_report": "backstop_data/html_report",
      "json_report": "backstop_data/json_report",
    },
    "report": ["browser", "json"],
    "engine": "puppeteer",
    "engineOptions": {
      "args": ["--no-sandbox"],
      "gotoParameters": { "waitUntil": ["load", "networkidle0"], timeout: 20000 },
    },
    "asyncCaptureLimit": 9,
    "asyncCompareLimit": 50,
    "debug": false,
    "debugWindow": false
  }