/*********************************************************************************************************************
 *  Copyright 2020 Amazon.com, Inc. or its affiliates. All Rights Reserved.                                           *
 *                                                                                                                    *
 *  Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance    *
 *  with the License. A copy of the License is located at                                                             *
 *                                                                                                                    *
 *      http://www.apache.org/licenses/LICENSE-2.0                                                                    *
 *                                                                                                                    *
 *  or in the 'license' file accompanying this file. This file is distributed on an 'AS IS' BASIS, WITHOUT WARRANTIES *
 *  OR CONDITIONS OF ANY KIND, express or implied. See the License for the specific language governing permissions    *
 *  and limitations under the License.                                                                                *
 *********************************************************************************************************************/

import * as cdk from '@aws-cdk/core';
import { SynthUtils } from '@aws-cdk/assert';

import { SolutionHelper } from '../lib/solution-helper';

test('creates the solution helper custom resources', () => {
    const app = new cdk.App();
    const stack = new cdk.Stack(app, 'TestStack');

    new SolutionHelper(stack, 'Helper', {
        solutionId: 'SO9999',
        pattern: 'test-pattern',

        shardCount: 2,
        retentionHours: 24,
        enhancedMonitoring: 'false'
    });

    expect(SynthUtils.toCloudFormation(stack)).toMatchSnapshot();
});