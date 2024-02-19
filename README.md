Googleads: Nodejs Client

This library (googleads-nodejs) is the compiled output of the Google Ads API Bazel build files.

To create this library by yourself:

1. Install bazel: `npm install -g @bazel/bazelisk`
2. Clone the Google APIs' original interface definitions: `git clone https://github.com/googleapis/googleapis.git`
3. Build for NodeJs: `bazel build //google/ads/googleads/v15:googleads-nodejs`
4. The output file (zipped) is located in: `bazel-bin/google/ads/googleads/v15/`
5. Unzip the file `googleads-nodejs.tar.gz` and use `npm` to compile the package