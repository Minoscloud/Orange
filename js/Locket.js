const mapping = {
  '%E8%BD%A6%E7%A5%A8%E7%A5%A8': ['vip', 'watch_vip'],
  'Locket': ['Gold']
};

let ua = $request.headers["User-Agent"] || $request.headers["user-agent"];
let obj = JSON.parse($response.body);

obj.Attention = "Chúc mừng bạn! Vui lòng không sử dụng cho thương mại!";

const match = Object.keys(mapping).find(e => ua.includes(e));
const [entitlement, product] = match ? mapping[match] : ['pro', 'com.locket02.premium.yearly'];

const sub = {
  is_sandbox: false,
  ownership_type: "PURCHASED",
  billing_issues_detected_at: null,
  period_type: "normal",
  expires_date: "2099-12-31T10:06:08Z",
  grace_period_expires_date: null,
  unsubscribe_detected_at: null,
  original_purchase_date: "2026-10-22T10:06:08Z",
  purchase_date: "2026-10-22T10:06:08Z",
  store: "app_store"
};

obj.subscriber.subscriptions[product] = { ...sub, product_identifier: product };
obj.subscriber.entitlements[entitlement] = {
  grace_period_expires_date: null,
  purchase_date: "2026-10-22T10:06:08Z",
  product_identifier: product,
  expires_date: "2099-12-31T10:06:08Z"
};

$done({ body: JSON.stringify(obj) });