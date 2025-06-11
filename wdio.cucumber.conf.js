import { config as sharedConfig} from "./wdio.conf.js"
export const config = {
    ...sharedConfig,
    ...{
        framework: "cucumber",
        specs: [
            './test/features/*.feature',
          ],
        cucumberOpts: {
            require: [
                './test/step-definitions/given.js',
                './test/step-definitions/when.js',
                './test/step-definitions/then.js'
            ]
        },
        beforeScenario: function (world, context) {
            console.log("------------------Context, World\n", context, world)
        },
        beforeFeature: function (uri, feature) {
            console.log("------------------feature\n", feature)
            global.featureName = feature.name
        },    
    }
}
