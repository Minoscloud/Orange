// ========= ID ========= //
// Locket: Gold + Filter Pack
// @duyvinh09, phiên bản cá nhân hóa bởi Minoscloud
// ========= Phần cố định ========= //
var ua = $request.headers["User-Agent"] || $request.headers["user-agent"];
var obj = JSON.parse($response.body);
obj.Attention = "Chúc mừng bạn! Vui lòng không sử dụng cho mục đích thương mại!";
function makeSub(_0x4178de, _0x122e5c, _0x515102) {
  return {
    'auto_resume_date': null,
    'display_name': _0x4178de,
    'is_sandbox': true,
    'ownership_type': "PURCHASED",
    'billing_issues_detected_at': null,
    'management_url': "https://apps.apple.com/account/subscriptions",
    'period_type': "normal",
    'price': {
      'amount': _0x122e5c,
      'currency': _0x515102
    },
    'expires_date': "2099-12-31T23:59:59Z",
    'grace_period_expires_date': null,
    'refunded_at': null,
    'unsubscribe_detected_at': null,
    'original_purchase_date': "2026-11-11T00:00:00Z",
    'purchase_date': "2026-11-11T00:00:00Z",
    'store': "app_store",
    'store_transaction_id': "2000001108724193"
  };
}
function makeEnt(_0x246517) {
  return {
    'grace_period_expires_date': null,
    'purchase_date': "2026-11-11T00:00:00Z",
    'product_identifier': _0x246517,
    'expires_date': "2099-12-31T23:59:59Z"
  };
}
obj.subscriber = obj.subscriber || {};
obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
obj.subscriber.entitlements = obj.subscriber.entitlements || {};
obj.subscriber.subscriptions.locket_1600_1y = {
  'auto_resume_date': null,
  'display_name': "locket_1600_1y",
  'is_sandbox': true,
  'ownership_type': "PURCHASED",
  'billing_issues_detected_at': null,
  'management_url': "https://apps.apple.com/account/subscriptions",
  'period_type': "normal",
  'price': {
    'amount': 399000,
    'currency': "VND"
  },
  'expires_date': "2099-12-31T23:59:59Z",
  'grace_period_expires_date': null,
  'refunded_at': null,
  'unsubscribe_detected_at': null,
  'original_purchase_date': "2026-11-11T00:00:00Z",
  'purchase_date': "2026-11-11T00:00:00Z",
  'store': "app_store",
  'store_transaction_id': "2000001108724193"
};
obj.subscriber.entitlements.Gold = {
  'grace_period_expires_date': null,
  'purchase_date': "2026-11-11T00:00:00Z",
  'product_identifier': "locket_1600_1y",
  'expires_date': "2099-12-31T23:59:59Z"
};
obj.subscriber.subscriptions["com.locket.Locket.FilterPack_20Photos_500"] = {
  'auto_resume_date': null,
  'display_name': "com.locket.Locket.FilterPack_20Photos_500",
  'is_sandbox': true,
  'ownership_type': "PURCHASED",
  'billing_issues_detected_at': null,
  'management_url': "https://apps.apple.com/account/subscriptions",
  'period_type': "normal",
  'price': {
    'amount': 0,
    'currency': "VND"
  },
  'expires_date': "2099-12-31T23:59:59Z",
  'grace_period_expires_date': null,
  'refunded_at': null,
  'unsubscribe_detected_at': null,
  'original_purchase_date': "2026-11-11T00:00:00Z",
  'purchase_date': "2026-11-11T00:00:00Z",
  'store': "app_store",
  'store_transaction_id': "2000001108724193"
};
obj.subscriber.entitlements.effect_pack_20 = {
  'grace_period_expires_date': null,
  'purchase_date': "2026-11-11T00:00:00Z",
  'product_identifier': "com.locket.Locket.FilterPack_20Photos_500",
  'expires_date': "2099-12-31T23:59:59Z"
};
$done({
  'body': JSON.stringify(obj)
});