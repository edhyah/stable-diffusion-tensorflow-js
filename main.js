const tf = require('@tensorflow/tfjs');
require('@tensorflow/tfjs-node'); // Otherwise only HTTP(S) protocols supported

// TODO: SyntaxError: Unexpected token I in JSON at position 2746
// Can go to position using vim command '02746l'; -Infinity doesn't seem to work
text_encoder_path = 'file://./models/tfjs_layers/text_encoder/model.json';

// TODO: Unknown layer: TFOpLambda. This may be dueto one of the following reasons:
//       1. The layer is defined in Python, in which case it needs to be ported
//          to Tensorflow.js or your Javascript code.
//       2. The custom layer is defined in Javascript, but is not registered
//          properly with tf.serialization.registerClass().
unet_path = 'file://./models/tfjs_layers/unet/model.json';
decoder_path = 'file://./models/tfjs_layers/decoder/model.json';

async function test_text_encoder() {
    console.log('Testing text_encoder...');
    try {
        const model = await tf.loadLayersModel(text_encoder_path);
        model.summary();
    } catch (e) {
        console.log(`... ${e}`);
    }
}

async function run_tests() {
    await test_text_encoder();
}

run_tests();
