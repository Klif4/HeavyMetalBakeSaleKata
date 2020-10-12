import {Given} from 'cucumber'
import * as assert from "assert";

Given(/^I Have (\d+)$/, function (a) {
    assert.equal(a, 1)
});