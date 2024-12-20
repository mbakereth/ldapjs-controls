'use strict'

const tap = require('tap')
tap.test('stubbed', async t => {
  t.pass()
})

/**
 * This test is disabled. The commented code below is directly copied from
 * the original test file in the core `node-ldapjs` repo. The actual test
 * suite should follow the patterns of the
 * server-side-sorting-request-control.test.js test suite.
 *
 * See https://github.com/ldapjs/node-ldapjs/pull/797#issuecomment-1094132289
 */

// 'use strict'

// const { test } = require('tap')
// const { BerReader, BerWriter } = require('@mbakereth/ldapjs-asn1')
// const { getControl, VirtualListViewRequestControl: VLVRControl } = require('../../lib')

// test('VLV request - new no args', function (t) {
//   t.ok(new VLVRControl())
//   t.end()
// })

// test('VLV request - new with args', function (t) {
//   const c = new VLVRControl({
//     criticality: true,
//     value: {
//       beforeCount: 0,
//       afterCount: 3,
//       targetOffset: 1,
//       contentCount: 0
//     }
//   })
//   t.ok(c)
//   t.equal(c.type, '2.16.840.1.113730.3.4.9')
//   t.ok(c.criticality)
//   t.equal(c.value.beforeCount, 0)
//   t.equal(c.value.afterCount, 3)
//   t.equal(c.value.targetOffset, 1)
//   t.equal(c.value.contentCount, 0)

//   t.end()
// })

// test('VLV request - toBer - with offset', function (t) {
//   const vlvc = new VLVRControl({
//     criticality: true,
//     value: {
//       beforeCount: 0,
//       afterCount: 3,
//       targetOffset: 1,
//       contentCount: 0
//     }
//   })

//   const ber = new BerWriter()
//   vlvc.toBer(ber)

//   const c = getControl(new BerReader(ber.buffer))
//   t.ok(c)
//   t.equal(c.type, '2.16.840.1.113730.3.4.9')
//   t.ok(c.criticality)
//   t.equal(c.value.beforeCount, 0)
//   t.equal(c.value.afterCount, 3)
//   t.equal(c.value.targetOffset, 1)
//   t.equal(c.value.contentCount, 0)

//   t.end()
// })

// test('VLV request - toBer - with assertion', function (t) {
//   const vlvc = new VLVRControl({
//     criticality: true,
//     value: {
//       beforeCount: 0,
//       afterCount: 3,
//       greaterThanOrEqual: '*foo*'
//     }
//   })

//   const ber = new BerWriter()
//   vlvc.toBer(ber)

//   const c = getControl(new BerReader(ber.buffer))
//   t.ok(c)
//   t.equal(c.type, '2.16.840.1.113730.3.4.9')
//   t.ok(c.criticality)
//   t.equal(c.value.beforeCount, 0)
//   t.equal(c.value.afterCount, 3)
//   t.equal(c.value.greaterThanOrEqual, '*foo*')

//   t.end()
// })

// test('VLV request - toBer - empty', function (t) {
//   const vlvc = new VLVRControl()
//   const ber = new BerWriter()
//   vlvc.toBer(ber)

//   const c = getControl(new BerReader(ber.buffer))
//   t.ok(c)
//   t.equal(c.type, '2.16.840.1.113730.3.4.9')
//   t.equal(c.criticality, false)
//   t.notOk(c.value.result)
//   t.end()
// })
