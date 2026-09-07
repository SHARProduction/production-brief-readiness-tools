import assert from 'node:assert/strict';
import {evaluate} from './src/core.js';
const valid=evaluate({references:[{source:'https://example.com/a?utm_source=x#p',intents:['lighting']} ]});
assert.equal(valid.valid,true); assert.equal(valid.rows[0].normalizedSource,'https://example.com/a');
const unsafe=evaluate({references:[{source:'https://user:secret@example.com/',intents:['motion']} ]});assert.ok(unsafe.errors.some(e=>e.code==='CREDENTIAL_URL'));
const dup=evaluate({references:[{source:'https://example.com/a?utm_source=x',intents:['lighting']},{source:'https://example.com/a',intents:['motion']}]});assert.ok(dup.errors.some(e=>e.code==='DUPLICATE'));
console.log('PASS reference intent annotator scenarios: 3/3');
