// Copyright 2024 Google LLC
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
//     https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.
//
// ** This file is automatically generated by gapic-generator-typescript. **
// ** https://github.com/googleapis/gapic-generator-typescript **
// ** All changes to this file may be overwritten. **



'use strict';

function main(customerId, conversations) {
  // [START googleads_v17_generated_LocalServicesLeadService_AppendLeadConversation_async]
  /**
   * This snippet has been automatically generated and should be regarded as a code template only.
   * It will require modifications to work.
   * It may require correct/in-range values for request initialization.
   * TODO(developer): Uncomment these variables before running the sample.
   */
  /**
   *  Required. The Id of the customer which owns the leads onto which the
   *  conversations will be appended.
   */
  // const customerId = 'abc123'
  /**
   *  Required. Conversations that are being appended.
   */
  // const conversations = [1,2,3,4]

  // Imports the Googleads library
  const {LocalServicesLeadServiceClient} = require('google-ads').v17;

  // Instantiates a client
  const googleadsClient = new LocalServicesLeadServiceClient();

  async function callAppendLeadConversation() {
    // Construct request
    const request = {
      customerId,
      conversations,
    };

    // Run request
    const response = await googleadsClient.appendLeadConversation(request);
    console.log(response);
  }

  callAppendLeadConversation();
  // [END googleads_v17_generated_LocalServicesLeadService_AppendLeadConversation_async]
}

process.on('unhandledRejection', err => {
  console.error(err.message);
  process.exitCode = 1;
});
main(...process.argv.slice(2));