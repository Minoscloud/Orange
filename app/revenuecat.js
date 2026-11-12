/***********************************

> ScriptName        𝐑𝐞𝐯𝐞𝐧𝐮𝐞𝐂𝐚𝐭 (Locket Optimized)
> Author            Minoscloud / Fixed for Locket
> TgChannel         https://t.me/tienich

***********************************/

// ========= ID ========= //
const mapping = {
  'Locket': ['Gold', 'com.locket.Locket.premium.yearly'],
  'locket': ['Gold', 'com.locket.Locket.premium.yearly'],
  'Subtracky': ['premium','premium_subtracky_lifetime'],
  'Photomator': ['pixelmator_photo_pro_access'],
  'VSCO': ['membership'],
  'Duplete/': ['Pro'],
  'HTTPBot': ['pro'],
  'audiomack': ['Premium1'],
  'server_bee': ['Pro'],
  'CountDuck': ['premium', 'Lifetime'],
  'Anybox': ['pro'],
  'Fileball': ['filebox_pro'],
  'WidgetSmith': ['Premium'],
  'Planny': ['premium'],
  'CPUMonitor': ['Pro'],
  'ImageX': ['imagex.pro.ios', 'imagex.pro.ios.lifetime'],
  'Ledger': ['Pro', 'com.lifetime.pro'],
  'PhotoRoom': ['business'],
  'Tangerine': ['Premium'],
  'Darkroom': ['co.bergen.Darkroom.entitlement.allToolsAndFilters']
};

var ua = $request.headers['User-Agent'] || $request.headers['user-agent'];
var obj = JSON.parse($response.body);

obj.subscriber = obj.subscriber || {};
obj.subscriber.subscriptions = obj.subscriber.subscriptions || {};
obj.subscriber.entitlements = obj.subscriber.entitlements || {};

var Minoscloud = {
  is_sandbox: false,
  ownership_type: "PURCHASED",
  billing_issues_detected_at: null,
  period_type: "normal",
  expires_date: "2099-12-31T23:59:59Z",
  grace_period_expires_date: null,
  unsubscribe_detected_at: null,
  original_purchase_date: "2026-11-11T00:00:00Z",
  purchase_date: "2026-11-11T00:00:00Z",
  store: "app_store"
};

var Orange = {
  grace_period_expires_date: null,
  purchase_date: "2026-11-11T00:00:00Z",
  product_identifier: "com.locket.Locket.premium.yearly",
  expires_date: "2099-12-31T23:59:59Z"
};

const match = Object.keys(mapping).find(el => ua.includes(el));

if (match) {
  const [key, product_id] = mapping[match];
  if (product_id) {
    Orange.product_identifier = product_id;
    obj.subscriber.subscriptions[product_id] = Minoscloud;
  }
  obj.subscriber.entitlements[key] = Orange;
} else {
  obj.subscriber.subscriptions["com.locket.Locket.premium.yearly"] = Minoscloud;
  obj.subscriber.entitlements["Gold"] = Orange;
}

console.log("-> RevenueCat Success by Minoscloud");
$done({
  body: JSON.stringify(obj)
});