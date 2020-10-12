import {Given} from 'cucumber'
import * as assert from "assert";

Given(/^I Have (\d+)$/, function (a) {
    expect(a).toBe(1)
});