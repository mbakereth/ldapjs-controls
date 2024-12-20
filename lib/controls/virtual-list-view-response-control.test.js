'use strict'

const tap = require('tap')
tap.test('stubbed', async t => {
  t.pass()
})

/**
 * This test is disabled. The commented code below is directly copied from
 * the original test file in the core `node-ldapjs` repo. The actual test
 * suite should follow the patterns of the
 * server-side-sorting-response-control.test.js test suite.
 *
 * See https://github.com/ldapjs/node-ldapjs/pull/797#issuecomment-1094132289
 */

//  'use strict'

//  const { test } = require('tap')
//  const { BerReader, BerWriter } = require('@mbakereth/ldapjs-asn1')
//  const ldap = require('../../lib')
//  const { getControl, VirtualListViewResponseControl: VLVResponseControl } = require('../../lib')
//  const OID = '2.16.840.1.113730.3.4.10'

//  test('VLV response - new no args', function (t) {
//    const c = new VLVResponseControl()
//    t.ok(c)
//    t.equal(c.type, OID)
//    t.equal(c.criticality, false)
//    t.end()
//  })

//  test('VLV response - new with args', function (t) {
//    const c = new VLVResponseControl({
//      criticality: true,
//      value: {
//        result: ldap.LDAP_SUCCESS,
//        targetPosition: 0,
//        contentCount: 10
//      }
//    })
//    t.ok(c)
//    t.equal(c.type, OID)
//    t.equal(c.criticality, false)
//    t.equal(c.value.result, ldap.LDAP_SUCCESS)
//    t.equal(c.value.targetPosition, 0)
//    t.equal(c.value.contentCount, 10)
//    t.end()
//  })

//  test('VLV response - toBer', function (t) {
//    const vlpc = new VLVResponseControl({
//      value: {
//        targetPosition: 0,
//        contentCount: 10,
//        result: ldap.LDAP_SUCCESS
//      }
//    })

//    const ber = new BerWriter()
//    vlpc.toBer(ber)

//    const c = getControl(new BerReader(ber.buffer))
//    t.ok(c)
//    t.equal(c.type, OID)
//    t.equal(c.criticality, false)
//    t.equal(c.value.result, ldap.LDAP_SUCCESS)
//    t.equal(c.value.targetPosition, 0)
//    t.equal(c.value.contentCount, 10)
//    t.end()
//  })

//  test('VLV response - toBer - empty', function (t) {
//    const vlpc = new VLVResponseControl()
//    const ber = new BerWriter()
//    vlpc.toBer(ber)

//    const c = getControl(new BerReader(ber.buffer))
//    t.ok(c)
//    t.equal(c.type, OID)
//    t.equal(c.criticality, false)
//    t.notOk(c.value.result)
//    t.end()
//  })
