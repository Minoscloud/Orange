// ============================================================
// Locket Features
// Endpoint: firebaseremoteconfig.googleapis.com
// Dùng cho: Loon / Quantumult X / Surge / Shadowrocket
// Tác giả: Minoscloud. Phiên bản cá nhân được tùy chỉnh từ phiên bản gốc của @duyvinh09
// Vui lòng ghi nguồn khi chỉnh sửa, sử dụng, chia sẻ
// ============================================================
var ua = $request.headers["User-Agent"] || $request.headers["user-agent"] || '';
var obj = JSON.parse($response.body);
if (ua.includes("Locket")) {
  obj.Attention = "Chúc mừng bạn! Vui lòng không sử dụng chúng dưới mục đích thương mại!";
  obj.entries = obj.entries || {};
  Object.assign(obj.entries, {
    'feature_gates': JSON.stringify({
      'app_icon_picker': "enabled",
      'camera_roll': "enabled",
      'camera_theme': "enabled",
      'locket_views': "enabled",
      'long_captions': "enabled",
      'longer_video': "enabled",
      'unlimited_friends': "enabled",
      'priority_support': "enabled",
      'profile_badge': "enabled",
      'remove_ads': "enabled",
      'video': "enabled",
      'custom_widget_frames': "enabled",
      'camera_filter_sheet': "enabled",
      'streak_recovery': "enabled",
      'streak_reminders': "enabled"
    }),
    'upsell_features': JSON.stringify({
      'app_icon_picker': true,
      'camera_roll': true,
      'camera_theme': true,
      'locket_views': true,
      'remove_ads': true,
      'custom_widget_frames': true
    }),
    'paywall_presentation_config': JSON.stringify({
      'uid': "paywall_testflight",
      'onboarding': false,
      'after_sent_moment': false,
      'on_foreground': false,
      'interval': 0x278d00,
      'profile_banner': true
    }),
    'feature_discovery_popup_config': JSON.stringify({
      'tag': "LOCKET GOLD ALL FEATURES",
      'tag_gradient': true,
      'tag_style': "gold_gradient",
      'title': "Đã mở khóa Gold 😎",
      'feature_set': [{
        'title': "Phiên bản cá nhân hóa ✨",
        'body': "bởi Minoscloud 💛",
        'imageURL': "https://github.com/Minoscloud/Orange/blob/main/js/DoraemonLocket.png"
      }],
      'primary_button_title': "Xong!",
      'campaign': "locket_gold_welcome_v3",
      'start_at': "2026-11-11T00:00:00",
      'end_at': "2099-12-31T23:59:59",
      'use_local_time_zone': true
    }),
    'android_subscribe_gold_button_enabled': "false",
    'profile_badge_visible': "true",
    'lunar_new_year_app_icon_enabled': "true",
    'settings_instagram_url': "",
    'settings_tiktok_url': "",
    'star_sign_caption_image_url': "https://storage.googleapis.com/locket-public/overlays/star_signs"
  });
  Object.assign(obj.entries, {
    'history_ads_mode': "off",
    'history_ads_prefetch_count': '0',
    'history_ads_prefetch_immediate': "false",
    'history_ads_prefetch_reroute': "false",
    'history_ads_dynamic_insertion': "false",
    'history_ads_refresh_prefetch_on_foreground': "false",
    'history_ads_floor_price': '0',
    'history_ads_floor_price_att': '0',
    'history_ad_log_displayed_on_background': "false",
    'history_ads_debug_menu': "false",
    'sentry_sample_rate': '0',
    'sentry_network_tracing': "false",
    'sentry_performance_tracking': "false",
    'sentry_trace_sample_rate': '0',
    'sentry_profiles_sample_rate': '0',
    'nimbus_cancellable_requests': "true",
    'history_ads_nimbus_interceptors': JSON.stringify([]),
    'history_ads_nimbus_formats': JSON.stringify([]),
    'nimbus_errors_logged_override': JSON.stringify({
      'NimbusFetchError': 0x0,
      'NimbusRateLimitError': 0x0
    })
  });
  Object.assign(obj.entries, {
    'camera': JSON.stringify({
      'gold_max_duration': 0xa,
      'max_duration': 0xa,
      'ultra_wide': true,
      'volume_button': true,
      'flash_button': true,
      'telephoto': true,
      'srgb': true,
      'lanczos': true,
      'quality_mbps': 0.6
    }),
    'camera_roll': JSON.stringify({
      'gold_max_duration': 0x1e,
      'video_max_duration': 0x1e,
      'max_duration': 0x1e,
      'trim_max_duration': 0x1e,
      'camera_roll_max_duration': 0x1e,
      'quality_mbps': 0.6,
      'flash_button': true
    }),
    'live_photos': JSON.stringify({
      'capture': true,
      'video': true,
      'viewing': true,
      'catch_up': true,
      'widget_playback': true,
      'widget_looping_mode': "unseen"
    }),
    'camera_filter_config': JSON.stringify({
      'allows_custom_filters': true,
      'show_filter_button': true,
      'sheet_enabled': true,
      'open_sheet_immediately': true,
      'reference_image_attachment_enabled': true,
      'sheet_filters': [{
        'id': "group_hot_ai_3d",
        'title': {
          'en': "AI 3D Hot 🔥"
        },
        'filter_ids': ["fireworks", "harry_potter", "minecraft", "fire_flame", "giant_spider", "ocean_underwater", "ufo_alien", "sweat_hearts"]
      }, {
        'id': "group_photobooth",
        'title': {
          'en': "Khung & Photobooth 📸"
        },
        'filter_ids': ["frame_berry_days", "frame_happy_snap", "frame_sky_diary", "photobooth_4cut", "photobooth_cute", "pb_holo_4cut", "pb_scrapbook_ripped_4cut", "pb_ripped_paper_4cut", "pb_denim_ripped_2x2"]
      }, {
        'id': "group_frames",
        'title': {
          'en': "Khung Viền & Hot Trend 🖼️"
        },
        'filter_ids': ["frame_classic_pb", "sticker_binh_luan_minh_tue", "cmt_locket", "khung_hello_kitty_pastel_ngot_ngao", "khung_hello_kitty_hong_pastel", "khung_pastel_vien_ren", "khung_hoa_pastel_vien_xanh_xinh", "khung_spiderred", "khung_khong_gian_xanh_pastel", "khung_ngoi_sao_hong_pastel", "khung_pastel_so_hai_cau", "khung_shin_chan", "khung_anh_hellokitty_v_sao", "khung_xanh_tay_sao_vang", "sinh_nhat_hello_kitty", "pb_single_y2k_silver_holo", "pb_single_denim_ripped", "pb_single_film_nostalgia"]
      }, {
        'id': "group_mischief",
        'title': {
          'en': "Hài hước"
        },
        'filter_ids': ["okay_wig", "influencer", "looks_maxxing", "toothless", "bye_brows"]
      }, {
        'id': "group_appearance",
        'title': {
          'en': "Ngoại hình"
        },
        'filter_ids': ["bowling_ball", "blonde_bleached", "beard", "bob_cut", "buns", "tatted", "mohawk", "braces", "bye_brows"]
      }, {
        'id': "group_event",
        'title': {
          'en': "Sự kiện"
        },
        'filter_ids': ["locket", "slimed", "princess", "disco_lights", "cash_money", "happy_birthday"]
      }, {
        'id': "group_cute",
        'title': {
          'en': "Dễ thương"
        },
        'filter_ids': ["cutesy", "sticker_face", "flower_crown", "love_bug"]
      }, {
        'id': "group_costume",
        'title': {
          'en': "Trang phục"
        },
        'filter_ids': ["wedding", "cowboy_cowgirl", "giraffe", "clown"]
      }, {
        'id': "group_holiday",
        'title': {
          'en': "Ngày lễ"
        },
        'filter_ids': ["easter_bunney_cutout", "easter_chick_cutout", "bearded", "leprechaun", "lucky_face", "sweet_hearts", "elf_cutout", "santa_cutout", "frosty"]
      }],
      'filter_groups': [{
        'id': "group_hot_ai_3d",
        'title': {
          'en': "AI 3D Hot 🔥"
        },
        'filter_ids': ["fireworks", "harry_potter", "minecraft", "fire_flame", "giant_spider", "ocean_underwater", "ufo_alien", "sweat_hearts"]
      }, {
        'id': "group_photobooth",
        'title': {
          'en': "Khung & Photobooth 📸"
        },
        'filter_ids': ["frame_berry_days", "frame_happy_snap", "frame_sky_diary", "photobooth_4cut", "photobooth_cute", "pb_holo_4cut", "pb_scrapbook_ripped_4cut", "pb_ripped_paper_4cut", "pb_denim_ripped_2x2"]
      }, {
        'id': "group_frames",
        'title': {
          'en': "Khung Viền & Hot Trend 🖼️"
        },
        'filter_ids': ["frame_classic_pb", "sticker_binh_luan_minh_tue", "cmt_locket", "khung_hello_kitty_pastel_ngot_ngao", "khung_hello_kitty_hong_pastel", "khung_pastel_vien_ren", "khung_hoa_pastel_vien_xanh_xinh", "khung_spiderred", "khung_khong_gian_xanh_pastel", "khung_ngoi_sao_hong_pastel", "khung_pastel_so_hai_cau", "khung_shin_chan", "khung_anh_hellokitty_v_sao", "khung_xanh_tay_sao_vang", "sinh_nhat_hello_kitty", "pb_single_y2k_silver_holo", "pb_single_denim_ripped", "pb_single_film_nostalgia"]
      }, {
        'id': "group_mischief",
        'title': {
          'en': "Hài hước"
        },
        'filter_ids': ["okay_wig", "influencer", "looks_maxxing", "toothless", "bye_brows"]
      }, {
        'id': "group_appearance",
        'title': {
          'en': "Ngoại hình"
        },
        'filter_ids': ["bowling_ball", "blonde_bleached", "beard", "bob_cut", "buns", "tatted", "mohawk", "braces", "bye_brows"]
      }, {
        'id': "group_event",
        'title': {
          'en': "Sự kiện"
        },
        'filter_ids': ["locket", "slimed", "princess", "disco_lights", "cash_money", "happy_birthday"]
      }, {
        'id': "group_cute",
        'title': {
          'en': "Dễ thương"
        },
        'filter_ids': ["cutesy", "sticker_face", "flower_crown", "love_bug"]
      }, {
        'id': "group_costume",
        'title': {
          'en': "Trang phục"
        },
        'filter_ids': ["wedding", "cowboy_cowgirl", "giraffe", "clown"]
      }, {
        'id': "group_holiday",
        'title': {
          'en': "Ngày lễ"
        },
        'filter_ids': ["easter_bunney_cutout", "easter_chick_cutout", "bearded", "leprechaun", "lucky_face", "sweet_hearts", "elf_cutout", "santa_cutout", "frosty"]
      }],
      'picker_filters': ["okay_wig", "influencer", "looks_maxxing", "toothless", "bye_brows", "bowling_ball", "blonde_bleached", "beard", "bob_cut", "buns", "tatted", "mohawk", "braces", "slimed", "princess", "disco_lights", "cash_money", "happy_birthday", "cutesy", "sticker_face", "flower_crown", "love_bug", "wedding", "cowboy_cowgirl", "giraffe", "clown", "easter_bunney_cutout", "easter_chick_cutout", "bearded", "leprechaun", "lucky_face", "sweet_hearts", "elf_cutout", "santa_cutout", "frosty", "frame_berry_days", "frame_happy_snap", "frame_sky_diary", "photobooth_4cut", "photobooth_cute", "pb_holo_4cut", "pb_scrapbook_ripped_4cut", "pb_ripped_paper_4cut", "pb_denim_ripped_2x2", "frame_classic_pb", "sticker_binh_luan_minh_tue", "cmt_locket", "khung_hello_kitty_pastel_ngot_ngao", "khung_hello_kitty_hong_pastel", "khung_pastel_vien_ren", "khung_hoa_pastel_vien_xanh_xinh", "khung_spiderred", "khung_khong_gian_xanh_pastel", "khung_ngoi_sao_hong_pastel", "khung_pastel_so_hai_cau", "khung_shin_chan", "khung_anh_hellokitty_v_sao", "khung_xanh_tay_sao_vang", "sinh_nhat_hello_kitty", "pb_single_y2k_silver_holo", "pb_single_denim_ripped", "pb_single_film_nostalgia", "locket", "fireworks", "harry_potter", "minecraft", "fire_flame", "giant_spider", "ocean_underwater", "ufo_alien", "sweat_hearts"],
      'remote_filters': [{
        'uid': "fireworks",
        'id': "fireworks",
        'name': "Pháo Hoa Rực Rỡ",
        'prompt': "Show the person in the photo with the exact same pose and background, but fill the scene with fireworks exploding in the night sky and reflecting colorful light onto the subject. Ensure the person is in the exact same pose and positioning within the frame. If no face is present, do not show any people in the output, only ever show people who were in the original input image.",
        'productUrl': null,
        'colors': ["#EC4899", "#8B5CF6"],
        'captureButtonColors': ["#EC4899", "#8B5CF6"],
        'icon': {
          'url': "https://cdn.upanhlaylink.com/i/WlnPm8fN.png",
          'iconUrl': "https://cdn.upanhlaylink.com/i/WlnPm8fN.png",
          'remoteImage': "https://cdn.upanhlaylink.com/i/WlnPm8fN.png",
          'sfSymbol': "sparkles",
          'emoji': ''
        },
        'textColor': "#FFFFFF",
        'style': "cutout",
        'overlay': false,
        'overlayImageUrl': "https://cdn.upanhlaylink.com/i/WlnPm8fN.png",
        'overlayImageURL': "https://cdn.upanhlaylink.com/i/WlnPm8fN.png",
        'imageUrl': "https://cdn.upanhlaylink.com/i/WlnPm8fN.png",
        'iconUrl': "https://cdn.upanhlaylink.com/i/WlnPm8fN.png",
        'referenceImages': [],
        'type': "normal",
        'filterType': "normal"
      }, {
        'uid': "harry_potter",
        'id': "harry_potter",
        'name': "Phù Thủy Hogwarts",
        'prompt': "Show the person in the photo with the exact same pose and background, but show them as a character from Harry Potter wearing a robe of one of the four houes. Keep the pose and framing identical and do not change the background.",
        'productUrl': null,
        'colors': ["#740001", "#D3A625"],
        'captureButtonColors': ["#740001", "#D3A625"],
        'icon': {
          'url': "https://cdn.upanhlaylink.com/i/Tu7Dt4le.png",
          'iconUrl': "https://cdn.upanhlaylink.com/i/Tu7Dt4le.png",
          'remoteImage': "https://cdn.upanhlaylink.com/i/Tu7Dt4le.png",
          'sfSymbol': "wand.and.stars",
          'emoji': ''
        },
        'textColor': "#FFFFFF",
        'style': "cutout",
        'overlay': false,
        'overlayImageUrl': "https://cdn.upanhlaylink.com/i/Tu7Dt4le.png",
        'overlayImageURL': "https://cdn.upanhlaylink.com/i/Tu7Dt4le.png",
        'imageUrl': "https://cdn.upanhlaylink.com/i/Tu7Dt4le.png",
        'iconUrl': "https://cdn.upanhlaylink.com/i/Tu7Dt4le.png",
        'referenceImages': [],
        'type': "normal",
        'filterType': "normal"
      }, {
        'uid': "minecraft",
        'id': "minecraft",
        'name': "Minecraft 3D",
        'prompt': "Show the person in the photo with the exact same pose, expression, and background, but make everything in the scene look like it was created from Minecraft-style blocks and show people as Minecraft characters. If no person is present, do not add any people to the output.",
        'productUrl': null,
        'colors': ["#22C55E", "#0EA5E9"],
        'captureButtonColors': ["#22C55E", "#0EA5E9"],
        'icon': {
          'url': "https://cdn.upanhlaylink.com/i/LQWMIicB.png",
          'iconUrl': "https://cdn.upanhlaylink.com/i/LQWMIicB.png",
          'remoteImage': "https://cdn.upanhlaylink.com/i/LQWMIicB.png",
          'sfSymbol': "cube.fill",
          'emoji': ''
        },
        'textColor': "#FFFFFF",
        'style': "cutout",
        'overlay': false,
        'overlayImageUrl': "https://cdn.upanhlaylink.com/i/LQWMIicB.png",
        'overlayImageURL': "https://cdn.upanhlaylink.com/i/LQWMIicB.png",
        'imageUrl': "https://cdn.upanhlaylink.com/i/LQWMIicB.png",
        'iconUrl': "https://cdn.upanhlaylink.com/i/LQWMIicB.png",
        'referenceImages': [],
        'type': "normal",
        'filterType': "normal"
      }, {
        'uid': "fire_flame",
        'id': "fire_flame",
        'name': "Ngọn Lửa Rực Cháy",
        'prompt': "Show the persons in the photo with the exact same pose and background, but with a dramatic theatrical flame effect appearing just in front of the subject's face, as if they are performing a fantasy fire-breathing act, captured with a modern iPhone camera look.\n\nThe flame should appear as a staged visual effect, suspended in front of the mouth area without showing fire originating from inside the body. Keep the effect believable and cinematic, with a bright yellow-white core, orange and red edges, subtle motion blur, and gentle heat distortion in the nearby air.\n\nAdd a soft warm glow on nearby facial features and clothing, consistent with the flame's position, while preserving the original lighting of the scene. Do not show burns, smoke inhalation, injury, pain, damage, or distress. Do not alter the person's face, expression, identity, or pose.\n\nKeep the background, framing, depth of field, and image quality identical to the original, with the flame effect appearing as a safe staged performance element captured in-camera. Do not change the overall compsition of the photo, do not add new people to the photo, only show each person in the photo one time.",
        'productUrl': null,
        'colors': ["#F97316", "#EAB308"],
        'captureButtonColors': ["#F97316", "#EAB308"],
        'icon': {
          'url': "https://cdn.upanhlaylink.com/i/E84woLlh.png",
          'iconUrl': "https://cdn.upanhlaylink.com/i/E84woLlh.png",
          'remoteImage': "https://cdn.upanhlaylink.com/i/E84woLlh.png",
          'sfSymbol': "flame.fill",
          'emoji': ''
        },
        'textColor': "#FFFFFF",
        'style': "cutout",
        'overlay': false,
        'overlayImageUrl': "https://cdn.upanhlaylink.com/i/E84woLlh.png",
        'overlayImageURL': "https://cdn.upanhlaylink.com/i/E84woLlh.png",
        'imageUrl': "https://cdn.upanhlaylink.com/i/E84woLlh.png",
        'iconUrl': "https://cdn.upanhlaylink.com/i/E84woLlh.png",
        'referenceImages': [],
        'type': "normal",
        'filterType': "normal"
      }, {
        'uid': "giant_spider",
        'id': "giant_spider",
        'name': "Nhện Khổng Lồ",
        'prompt': "Show the person in the photo with the exact same pose, expression, and background, but place a realistic spider perched on them somewhere, such as their shoulder or head. If no person is present, do not add any people to the output.",
        'productUrl': null,
        'colors': ["#334155", "#EF4444"],
        'captureButtonColors': ["#334155", "#EF4444"],
        'icon': {
          'url': "https://cdn.upanhlaylink.com/i/p4ARtqG1.png",
          'iconUrl': "https://cdn.upanhlaylink.com/i/p4ARtqG1.png",
          'remoteImage': "https://cdn.upanhlaylink.com/i/p4ARtqG1.png",
          'sfSymbol': "ant.fill",
          'emoji': ''
        },
        'textColor': "#FFFFFF",
        'style': "cutout",
        'overlay': false,
        'overlayImageUrl': "https://cdn.upanhlaylink.com/i/p4ARtqG1.png",
        'overlayImageURL': "https://cdn.upanhlaylink.com/i/p4ARtqG1.png",
        'imageUrl': "https://cdn.upanhlaylink.com/i/p4ARtqG1.png",
        'iconUrl': "https://cdn.upanhlaylink.com/i/p4ARtqG1.png",
        'referenceImages': [],
        'type': "normal",
        'filterType': "normal"
      }, {
        'uid': "ocean_underwater",
        'id': "ocean_underwater",
        'name': "Thủy Cung Đại Dương",
        'prompt': "Show the person in the photo with the exact same pose, background, and facial expression, but as if them and their surrounding environment was underwater. If no face is present, do not show any people in the output, only ever show people who were in the original input image.",
        'productUrl': null,
        'colors': ["#06B6D4", "#3B82F6"],
        'captureButtonColors': ["#06B6D4", "#3B82F6"],
        'icon': {
          'url': "https://cdn.upanhlaylink.com/i/jKae4Rkw.png",
          'iconUrl': "https://cdn.upanhlaylink.com/i/jKae4Rkw.png",
          'remoteImage': "https://cdn.upanhlaylink.com/i/jKae4Rkw.png",
          'sfSymbol': "drop.fill",
          'emoji': ''
        },
        'textColor': "#FFFFFF",
        'style': "cutout",
        'overlay': false,
        'overlayImageUrl': "https://cdn.upanhlaylink.com/i/jKae4Rkw.png",
        'overlayImageURL': "https://cdn.upanhlaylink.com/i/jKae4Rkw.png",
        'imageUrl': "https://cdn.upanhlaylink.com/i/jKae4Rkw.png",
        'iconUrl': "https://cdn.upanhlaylink.com/i/jKae4Rkw.png",
        'referenceImages': [],
        'type': "normal",
        'filterType': "normal"
      }, {
        'uid': "ufo_alien",
        'id': "ufo_alien",
        'name': "UFO & Alien",
        'prompt': "Show the person in the photo with the exact same pose and background, but show a subtle UFO hovering in the sky or an alien somewhere hidden somewhere in the user's background. If no face is present, do not show any people in the output, only ever show people who were in the original input image.",
        'productUrl': null,
        'colors': ["#10B981", "#8B5CF6"],
        'captureButtonColors': ["#10B981", "#8B5CF6"],
        'icon': {
          'url': "https://cdn.upanhlaylink.com/i/b3e5SMT6.png",
          'iconUrl': "https://cdn.upanhlaylink.com/i/b3e5SMT6.png",
          'remoteImage': "https://cdn.upanhlaylink.com/i/b3e5SMT6.png",
          'sfSymbol': "sparkles",
          'emoji': ''
        },
        'textColor': "#FFFFFF",
        'style': "cutout",
        'overlay': false,
        'overlayImageUrl': "https://cdn.upanhlaylink.com/i/b3e5SMT6.png",
        'overlayImageURL': "https://cdn.upanhlaylink.com/i/b3e5SMT6.png",
        'imageUrl': "https://cdn.upanhlaylink.com/i/b3e5SMT6.png",
        'iconUrl': "https://cdn.upanhlaylink.com/i/b3e5SMT6.png",
        'referenceImages': [],
        'type': "normal",
        'filterType': "normal"
      }, {
        'uid': "sweat_hearts",
        'id': "sweat_hearts",
        'name': "Sweet Hearts",
        'prompt': "sweet_hearts",
        'productUrl': null,
        'colors': ["#FB7185", "#FCE7F3"],
        'captureButtonColors': ["#FB7185", "#FCE7F3"],
        'icon': {
          'url': "https://cdn.upanhlaylink.com/i/KKHQjVIP.png",
          'iconUrl': "https://cdn.upanhlaylink.com/i/KKHQjVIP.png",
          'remoteImage': "https://cdn.upanhlaylink.com/i/KKHQjVIP.png",
          'sfSymbol': "sparkles",
          'emoji': ''
        },
        'textColor': "#FFFFFF",
        'style': "cutout",
        'overlay': true,
        'overlayImageUrl': "https://cdn.upanhlaylink.com/i/KKHQjVIP.png",
        'overlayImageURL': "https://cdn.upanhlaylink.com/i/KKHQjVIP.png",
        'imageUrl': "https://cdn.upanhlaylink.com/i/KKHQjVIP.png",
        'iconUrl': "https://cdn.upanhlaylink.com/i/KKHQjVIP.png",
        'referenceImages': [],
        'type': "normal",
        'filterType': "cutout"
      }, {
        'uid': "frame_berry_days",
        'id': "frame_berry_days",
        'name': "Photobooth Berry Days",
        'category': "Photobooth",
        'prompt': "pb_strawberry",
        'style': "cutout",
        'type': "normal",
        'filterType': "cutout",
        'overlay': true,
        'imageUrl': "https://cdn.upanhlaylink.com/i/gxzBXrkx.png",
        'iconUrl': "https://cdn.upanhlaylink.com/i/gxzBXrkx.png",
        'overlayImageUrl': "https://cdn.upanhlaylink.com/i/gxzBXrkx.png",
        'overlayImageURL': "https://cdn.upanhlaylink.com/i/gxzBXrkx.png",
        'tintColor': "#FFB6C1",
        'colors': ["#FFB6C1", "#FF69B4"],
        'captureButtonColors': ["#FFB6C1", "#FF69B4"],
        'icon': {
          'url': "https://cdn.upanhlaylink.com/i/gxzBXrkx.png",
          'iconUrl': "https://cdn.upanhlaylink.com/i/gxzBXrkx.png",
          'remoteImage': "https://cdn.upanhlaylink.com/i/gxzBXrkx.png",
          'sfSymbol': "square.grid.2x2",
          'symbol': "square.grid.2x2",
          'emoji': ''
        },
        'outputUrl': null,
        'productUrl': null,
        'textColor': "#FFFFFF",
        'referenceImages': []
      }, {
        'uid': "frame_happy_snap",
        'id': "frame_happy_snap",
        'name': "Photobooth Happy Snap",
        'category': "Photobooth",
        'prompt': "pb_vintage",
        'style': "cutout",
        'type': "normal",
        'filterType': "cutout",
        'overlay': true,
        'imageUrl': "https://cdn.upanhlaylink.com/i/Ya9kkP4b.png",
        'iconUrl': "https://cdn.upanhlaylink.com/i/Ya9kkP4b.png",
        'overlayImageUrl': "https://cdn.upanhlaylink.com/i/Ya9kkP4b.png",
        'overlayImageURL': "https://cdn.upanhlaylink.com/i/Ya9kkP4b.png",
        'tintColor': "#A8E6CF",
        'colors': ["#A8E6CF", "#88D49E"],
        'captureButtonColors': ["#A8E6CF", "#88D49E"],
        'icon': {
          'url': "https://cdn.upanhlaylink.com/i/Ya9kkP4b.png",
          'iconUrl': "https://cdn.upanhlaylink.com/i/Ya9kkP4b.png",
          'remoteImage': "https://cdn.upanhlaylink.com/i/Ya9kkP4b.png",
          'sfSymbol': "square.grid.2x2",
          'symbol': "square.grid.2x2",
          'emoji': ''
        },
        'outputUrl': null,
        'productUrl': null,
        'textColor': "#FFFFFF",
        'referenceImages': []
      }, {
        'uid': "frame_sky_diary",
        'id': "frame_sky_diary",
        'name': "Photobooth Sky Diary",
        'category': "Photobooth",
        'prompt': "pb_galaxy",
        'style': "cutout",
        'type': "normal",
        'filterType': "cutout",
        'overlay': true,
        'imageUrl': "https://cdn.upanhlaylink.com/i/WXQ5IJRY.png",
        'iconUrl': "https://cdn.upanhlaylink.com/i/WXQ5IJRY.png",
        'overlayImageUrl': "https://cdn.upanhlaylink.com/i/WXQ5IJRY.png",
        'overlayImageURL': "https://cdn.upanhlaylink.com/i/WXQ5IJRY.png",
        'tintColor': "#D8B4F8",
        'colors': ["#D8B4F8", "#C3B1E1"],
        'captureButtonColors': ["#D8B4F8", "#C3B1E1"],
        'icon': {
          'url': "https://cdn.upanhlaylink.com/i/WXQ5IJRY.png",
          'iconUrl': "https://cdn.upanhlaylink.com/i/WXQ5IJRY.png",
          'remoteImage': "https://cdn.upanhlaylink.com/i/WXQ5IJRY.png",
          'sfSymbol': "square.grid.2x2",
          'symbol': "square.grid.2x2",
          'emoji': ''
        },
        'outputUrl': null,
        'productUrl': null,
        'textColor': "#FFFFFF",
        'referenceImages': []
      }, {
        'uid': "photobooth_4cut",
        'id': "photobooth_4cut",
        'name': "Photobooth 4 ô",
        'category': "Photobooth",
        'prompt': "photobooth_4cut",
        'style': "cutout",
        'type': "normal",
        'filterType': "cutout",
        'overlay': true,
        'imageUrl': "https://cdn.upanhlaylink.com/i/I3P77Cgk.png",
        'iconUrl': "https://cdn.upanhlaylink.com/i/I3P77Cgk.png",
        'overlayImageUrl': "https://cdn.upanhlaylink.com/i/I3P77Cgk.png",
        'overlayImageURL': "https://cdn.upanhlaylink.com/i/I3P77Cgk.png",
        'tintColor': "#FFD6E0",
        'colors': ["#FFD6E0", "#FFE4EC"],
        'captureButtonColors': ["#FFD6E0", "#FFE4EC"],
        'icon': {
          'url': "https://cdn.upanhlaylink.com/i/I3P77Cgk.png",
          'iconUrl': "https://cdn.upanhlaylink.com/i/I3P77Cgk.png",
          'remoteImage': "https://cdn.upanhlaylink.com/i/I3P77Cgk.png",
          'sfSymbol': "square.grid.2x2",
          'symbol': "square.grid.2x2",
          'emoji': ''
        },
        'outputUrl': null,
        'productUrl': null,
        'textColor': "#FFFFFF",
        'referenceImages': []
      }, {
        'uid': "photobooth_cute",
        'id': "photobooth_cute",
        'name': "Photobooth Cute",
        'category': "Photobooth",
        'prompt': "photobooth_cute",
        'style': "cutout",
        'type': "normal",
        'filterType': "cutout",
        'overlay': true,
        'imageUrl': "https://cdn.upanhlaylink.com/i/QjqQ20hC.png",
        'iconUrl': "https://cdn.upanhlaylink.com/i/QjqQ20hC.png",
        'overlayImageUrl': "https://cdn.upanhlaylink.com/i/QjqQ20hC.png",
        'overlayImageURL': "https://cdn.upanhlaylink.com/i/QjqQ20hC.png",
        'tintColor': "#FFD6E0",
        'colors': ["#FFD6E0", "#FFE4EC"],
        'captureButtonColors': ["#FFD6E0", "#FFE4EC"],
        'icon': {
          'url': "https://cdn.upanhlaylink.com/i/QjqQ20hC.png",
          'iconUrl': "https://cdn.upanhlaylink.com/i/QjqQ20hC.png",
          'remoteImage': "https://cdn.upanhlaylink.com/i/QjqQ20hC.png",
          'sfSymbol': "square.grid.2x2",
          'symbol': "square.grid.2x2",
          'emoji': ''
        },
        'outputUrl': null,
        'productUrl': null,
        'textColor': "#FFFFFF",
        'referenceImages': []
      }, {
        'uid': "pb_holo_4cut",
        'id': "pb_holo_4cut",
        'name': "Photobooth Y2K Holo",
        'category': "Photobooth",
        'prompt': "pb_holo_4cut",
        'style': "cutout",
        'type': "normal",
        'filterType': "cutout",
        'overlay': true,
        'imageUrl': "https://cdn.upanhlaylink.com/i/2LCkIMOS.png",
        'iconUrl': "https://cdn.upanhlaylink.com/i/2LCkIMOS.png",
        'overlayImageUrl': "https://cdn.upanhlaylink.com/i/2LCkIMOS.png",
        'overlayImageURL': "https://cdn.upanhlaylink.com/i/2LCkIMOS.png",
        'tintColor': "#C4B5FD",
        'colors': ["#C4B5FD", "#E0E7FF"],
        'captureButtonColors': ["#C4B5FD", "#E0E7FF"],
        'icon': {
          'url': "https://cdn.upanhlaylink.com/i/2LCkIMOS.png",
          'iconUrl': "https://cdn.upanhlaylink.com/i/2LCkIMOS.png",
          'remoteImage': "https://cdn.upanhlaylink.com/i/2LCkIMOS.png",
          'sfSymbol': "square.grid.2x2",
          'symbol': "square.grid.2x2",
          'emoji': ''
        },
        'outputUrl': null,
        'productUrl': null,
        'textColor': "#FFFFFF",
        'referenceImages': []
      }, {
        'uid': "pb_scrapbook_ripped_4cut",
        'id': "pb_scrapbook_ripped_4cut",
        'name': "Photobooth Scrapbook",
        'category': "Photobooth",
        'prompt': "pb_scrapbook_ripped_4cut",
        'style': "cutout",
        'type': "normal",
        'filterType': "cutout",
        'overlay': true,
        'imageUrl': "https://cdn.upanhlaylink.com/i/EO18VJqL.png",
        'iconUrl': "https://cdn.upanhlaylink.com/i/EO18VJqL.png",
        'overlayImageUrl': "https://cdn.upanhlaylink.com/i/EO18VJqL.png",
        'overlayImageURL': "https://cdn.upanhlaylink.com/i/EO18VJqL.png",
        'tintColor': "#D6A36A",
        'colors': ["#D6A36A", "#FDE68A"],
        'captureButtonColors': ["#D6A36A", "#FDE68A"],
        'icon': {
          'url': "https://cdn.upanhlaylink.com/i/EO18VJqL.png",
          'iconUrl': "https://cdn.upanhlaylink.com/i/EO18VJqL.png",
          'remoteImage': "https://cdn.upanhlaylink.com/i/EO18VJqL.png",
          'sfSymbol': "square.grid.2x2",
          'symbol': "square.grid.2x2",
          'emoji': ''
        },
        'outputUrl': null,
        'productUrl': null,
        'textColor': "#FFFFFF",
        'referenceImages': []
      }, {
        'uid': "pb_ripped_paper_4cut",
        'id': "pb_ripped_paper_4cut",
        'name': "Photobooth Ripped Paper",
        'category': "Photobooth",
        'prompt': "pb_ripped_paper_4cut",
        'style': "cutout",
        'type': "normal",
        'filterType': "cutout",
        'overlay': true,
        'imageUrl': "https://cdn.upanhlaylink.com/i/xBNYQv0A.png",
        'iconUrl': "https://cdn.upanhlaylink.com/i/xBNYQv0A.png",
        'overlayImageUrl': "https://cdn.upanhlaylink.com/i/xBNYQv0A.png",
        'overlayImageURL': "https://cdn.upanhlaylink.com/i/xBNYQv0A.png",
        'tintColor': "#EF4444",
        'colors': ["#EF4444", "#FCA5A5"],
        'captureButtonColors': ["#EF4444", "#FCA5A5"],
        'icon': {
          'url': "https://cdn.upanhlaylink.com/i/xBNYQv0A.png",
          'iconUrl': "https://cdn.upanhlaylink.com/i/xBNYQv0A.png",
          'remoteImage': "https://cdn.upanhlaylink.com/i/xBNYQv0A.png",
          'sfSymbol': "square.grid.2x2",
          'symbol': "square.grid.2x2",
          'emoji': ''
        },
        'outputUrl': null,
        'productUrl': null,
        'textColor': "#FFFFFF",
        'referenceImages': []
      }, {
        'uid': "pb_denim_ripped_2x2",
        'id': "pb_denim_ripped_2x2",
        'name': "Photobooth Denim 4 ô",
        'category': "Photobooth",
        'prompt': "pb_denim_ripped_2x2",
        'style': "cutout",
        'type': "normal",
        'filterType': "cutout",
        'overlay': true,
        'imageUrl': "https://cdn.upanhlaylink.com/i/sKn1mwH3.png",
        'iconUrl': "https://cdn.upanhlaylink.com/i/sKn1mwH3.png",
        'overlayImageUrl': "https://cdn.upanhlaylink.com/i/sKn1mwH3.png",
        'overlayImageURL': "https://cdn.upanhlaylink.com/i/sKn1mwH3.png",
        'tintColor': "#38BDF8",
        'colors': ["#38BDF8", "#93C5FD"],
        'captureButtonColors': ["#38BDF8", "#93C5FD"],
        'icon': {
          'url': "https://cdn.upanhlaylink.com/i/sKn1mwH3.png",
          'iconUrl': "https://cdn.upanhlaylink.com/i/sKn1mwH3.png",
          'remoteImage': "https://cdn.upanhlaylink.com/i/sKn1mwH3.png",
          'sfSymbol': "square.grid.2x2",
          'symbol': "square.grid.2x2",
          'emoji': ''
        },
        'outputUrl': null,
        'productUrl': null,
        'textColor': "#FFFFFF",
        'referenceImages': []
      }, {
        'uid': "frame_classic_pb",
        'id': "frame_classic_pb",
        'name': "Photobooth Cổ Điển",
        'category': "Photobooth",
        'prompt': "photoboot",
        'style': "cutout",
        'type': "normal",
        'filterType': "cutout",
        'overlay': true,
        'imageUrl': "https://cdn.upanhlaylink.com/i/bjXF2O5d.png",
        'iconUrl': "https://cdn.upanhlaylink.com/i/bjXF2O5d.png",
        'overlayImageUrl': "https://cdn.upanhlaylink.com/i/bjXF2O5d.png",
        'overlayImageURL': "https://cdn.upanhlaylink.com/i/bjXF2O5d.png",
        'tintColor': "#FF758C",
        'colors': ["#FF758C", "#FF7EB3"],
        'captureButtonColors': ["#FF758C", "#FF7EB3"],
        'icon': {
          'url': "https://cdn.upanhlaylink.com/i/bjXF2O5d.png",
          'iconUrl': "https://cdn.upanhlaylink.com/i/bjXF2O5d.png",
          'remoteImage': "https://cdn.upanhlaylink.com/i/bjXF2O5d.png",
          'sfSymbol': "square.grid.2x2",
          'symbol': "square.grid.2x2",
          'emoji': ''
        },
        'outputUrl': null,
        'productUrl': null,
        'textColor': "#FFFFFF",
        'referenceImages': []
      }, {
        'uid': "sticker_binh_luan_minh_tue",
        'id': "sticker_binh_luan_minh_tue",
        'name': "Trend Tíc Tóc",
        'category': "Frames",
        'prompt': "sticker_binh_luan_minh_tue",
        'style': "cutout",
        'type': "normal",
        'filterType': "cutout",
        'overlay': true,
        'imageUrl': "https://cdn.upanhlaylink.com/i/kSaUH2JF.png",
        'iconUrl': "https://cdn.upanhlaylink.com/i/kSaUH2JF.png",
        'overlayImageUrl': "https://cdn.upanhlaylink.com/i/kSaUH2JF.png",
        'overlayImageURL': "https://cdn.upanhlaylink.com/i/kSaUH2JF.png",
        'tintColor': "#FF758C",
        'colors': ["#FF758C", "#FF7EB3"],
        'captureButtonColors': ["#FF758C", "#FF7EB3"],
        'icon': {
          'url': "https://cdn.upanhlaylink.com/i/kSaUH2JF.png",
          'iconUrl': "https://cdn.upanhlaylink.com/i/kSaUH2JF.png",
          'remoteImage': "https://cdn.upanhlaylink.com/i/kSaUH2JF.png",
          'sfSymbol': "heart.fill",
          'symbol': "heart.fill",
          'emoji': ''
        },
        'outputUrl': null,
        'productUrl': null,
        'textColor': "#FFFFFF",
        'referenceImages': []
      }, {
        'uid': "cmt_locket",
        'id': "cmt_locket",
        'name': "Locket Việt Nam",
        'category': "Frames",
        'prompt': "cmt_locket",
        'style': "cutout",
        'type': "normal",
        'filterType': "cutout",
        'overlay': true,
        'imageUrl': "https://cdn.upanhlaylink.com/i/xxXEkGa0.png",
        'iconUrl': "https://cdn.upanhlaylink.com/i/xxXEkGa0.png",
        'overlayImageUrl': "https://cdn.upanhlaylink.com/i/xxXEkGa0.png",
        'overlayImageURL': "https://cdn.upanhlaylink.com/i/xxXEkGa0.png",
        'tintColor': "#FF758C",
        'colors': ["#FF758C", "#FF7EB3"],
        'captureButtonColors': ["#FF758C", "#FF7EB3"],
        'icon': {
          'url': "https://cdn.upanhlaylink.com/i/xxXEkGa0.png",
          'iconUrl': "https://cdn.upanhlaylink.com/i/xxXEkGa0.png",
          'remoteImage': "https://cdn.upanhlaylink.com/i/xxXEkGa0.png",
          'sfSymbol': "heart.fill",
          'symbol': "heart.fill",
          'emoji': ''
        },
        'outputUrl': null,
        'productUrl': null,
        'textColor': "#FFFFFF",
        'referenceImages': []
      }, {
        'uid': "khung_hello_kitty_pastel_ngot_ngao",
        'id': "khung_hello_kitty_pastel_ngot_ngao",
        'name': "Hello Kitty Ngọt Ngào",
        'category': "Frames",
        'prompt': "khung_hello_kitty_pastel_ngot_ngao",
        'style': "cutout",
        'type': "normal",
        'filterType': "cutout",
        'overlay': true,
        'imageUrl': "https://cdn.upanhlaylink.com/i/YYMilOf6.png",
        'iconUrl': "https://cdn.upanhlaylink.com/i/YYMilOf6.png",
        'overlayImageUrl': "https://cdn.upanhlaylink.com/i/YYMilOf6.png",
        'overlayImageURL': "https://cdn.upanhlaylink.com/i/YYMilOf6.png",
        'tintColor': "#FF758C",
        'colors': ["#FF758C", "#FF7EB3"],
        'captureButtonColors': ["#FF758C", "#FF7EB3"],
        'icon': {
          'url': "https://cdn.upanhlaylink.com/i/YYMilOf6.png",
          'iconUrl': "https://cdn.upanhlaylink.com/i/YYMilOf6.png",
          'remoteImage': "https://cdn.upanhlaylink.com/i/YYMilOf6.png",
          'sfSymbol': "heart.fill",
          'symbol': "heart.fill",
          'emoji': ''
        },
        'outputUrl': null,
        'productUrl': null,
        'textColor': "#FFFFFF",
        'referenceImages': []
      }, {
        'uid': "khung_hello_kitty_hong_pastel",
        'id': "khung_hello_kitty_hong_pastel",
        'name': "Khung Hello Kitty Hồng",
        'category': "Frames",
        'prompt': "khung_hello_kitty_hong_pastel",
        'style': "cutout",
        'type': "normal",
        'filterType': "cutout",
        'overlay': true,
        'imageUrl': "https://cdn.upanhlaylink.com/i/3lS0E28Z.png",
        'iconUrl': "https://cdn.upanhlaylink.com/i/3lS0E28Z.png",
        'overlayImageUrl': "https://cdn.upanhlaylink.com/i/3lS0E28Z.png",
        'overlayImageURL': "https://cdn.upanhlaylink.com/i/3lS0E28Z.png",
        'tintColor': "#FF758C",
        'colors': ["#FF758C", "#FF7EB3"],
        'captureButtonColors': ["#FF758C", "#FF7EB3"],
        'icon': {
          'url': "https://cdn.upanhlaylink.com/i/3lS0E28Z.png",
          'iconUrl': "https://cdn.upanhlaylink.com/i/3lS0E28Z.png",
          'remoteImage': "https://cdn.upanhlaylink.com/i/3lS0E28Z.png",
          'sfSymbol': "heart.fill",
          'symbol': "heart.fill",
          'emoji': ''
        },
        'outputUrl': null,
        'productUrl': null,
        'textColor': "#FFFFFF",
        'referenceImages': []
      }, {
        'uid': "khung_pastel_vien_ren",
        'id': "khung_pastel_vien_ren",
        'name': "Nơ Pastel Viền Ren",
        'category': "Frames",
        'prompt': "khung_pastel_vien_ren",
        'style': "cutout",
        'type': "normal",
        'filterType': "cutout",
        'overlay': true,
        'imageUrl': "https://cdn.upanhlaylink.com/i/itGU69Tn.png",
        'iconUrl': "https://cdn.upanhlaylink.com/i/itGU69Tn.png",
        'overlayImageUrl': "https://cdn.upanhlaylink.com/i/itGU69Tn.png",
        'overlayImageURL': "https://cdn.upanhlaylink.com/i/itGU69Tn.png",
        'tintColor': "#FF758C",
        'colors': ["#FF758C", "#FF7EB3"],
        'captureButtonColors': ["#FF758C", "#FF7EB3"],
        'icon': {
          'url': "https://cdn.upanhlaylink.com/i/itGU69Tn.png",
          'iconUrl': "https://cdn.upanhlaylink.com/i/itGU69Tn.png",
          'remoteImage': "https://cdn.upanhlaylink.com/i/itGU69Tn.png",
          'sfSymbol': "heart.fill",
          'symbol': "heart.fill",
          'emoji': ''
        },
        'outputUrl': null,
        'productUrl': null,
        'textColor': "#FFFFFF",
        'referenceImages': []
      }, {
        'uid': "khung_hoa_pastel_vien_xanh_xinh",
        'id': "khung_hoa_pastel_vien_xanh_xinh",
        'name': "Hoa Xinh Pastel",
        'category': "Frames",
        'prompt': "khung_hoa_pastel_vien_xanh_xinh",
        'style': "cutout",
        'type': "normal",
        'filterType': "cutout",
        'overlay': true,
        'imageUrl': "https://cdn.upanhlaylink.com/i/HmfZ08L9.png",
        'iconUrl': "https://cdn.upanhlaylink.com/i/HmfZ08L9.png",
        'overlayImageUrl': "https://cdn.upanhlaylink.com/i/HmfZ08L9.png",
        'overlayImageURL': "https://cdn.upanhlaylink.com/i/HmfZ08L9.png",
        'tintColor': "#51e6e4",
        'colors': ["#51e6e4", "#fce03f"],
        'captureButtonColors': ["#51e6e4", "#fce03f"],
        'icon': {
          'url': "https://cdn.upanhlaylink.com/i/HmfZ08L9.png",
          'iconUrl': "https://cdn.upanhlaylink.com/i/HmfZ08L9.png",
          'remoteImage': "https://cdn.upanhlaylink.com/i/HmfZ08L9.png",
          'sfSymbol': "heart.fill",
          'symbol': "heart.fill",
          'emoji': ''
        },
        'outputUrl': null,
        'productUrl': null,
        'textColor': "#FFFFFF",
        'referenceImages': []
      }, {
        'uid': "khung_spiderred",
        'id': "khung_spiderred",
        'name': "Nhện Đỏ",
        'category': "Frames",
        'prompt': "khung_spiderred",
        'style': "cutout",
        'type': "normal",
        'filterType': "cutout",
        'overlay': true,
        'imageUrl': "https://cdn.upanhlaylink.com/i/IlejAWVQ.png",
        'iconUrl': "https://cdn.upanhlaylink.com/i/IlejAWVQ.png",
        'overlayImageUrl': "https://cdn.upanhlaylink.com/i/IlejAWVQ.png",
        'overlayImageURL': "https://cdn.upanhlaylink.com/i/IlejAWVQ.png",
        'tintColor': "#b3001e",
        'colors': ["#b3001e", "#b3001e"],
        'captureButtonColors': ["#b3001e", "#b3001e"],
        'icon': {
          'url': "https://cdn.upanhlaylink.com/i/IlejAWVQ.png",
          'iconUrl': "https://cdn.upanhlaylink.com/i/IlejAWVQ.png",
          'remoteImage': "https://cdn.upanhlaylink.com/i/IlejAWVQ.png",
          'sfSymbol': "heart.fill",
          'symbol': "heart.fill",
          'emoji': ''
        },
        'outputUrl': null,
        'productUrl': null,
        'textColor': "#FFFFFF",
        'referenceImages': []
      }, {
        'uid': "khung_khong_gian_xanh_pastel",
        'id': "khung_khong_gian_xanh_pastel",
        'name': "Không Gian Xanh",
        'category': "Frames",
        'prompt': "khung_khong_gian_xanh_pastel",
        'style': "cutout",
        'type': "normal",
        'filterType': "cutout",
        'overlay': true,
        'imageUrl': "https://cdn.upanhlaylink.com/i/KMjL2bn1.png",
        'iconUrl': "https://cdn.upanhlaylink.com/i/KMjL2bn1.png",
        'overlayImageUrl': "https://cdn.upanhlaylink.com/i/KMjL2bn1.png",
        'overlayImageURL': "https://cdn.upanhlaylink.com/i/KMjL2bn1.png",
        'tintColor': "#65d9fc",
        'colors': ["#65d9fc", "#65d9fc"],
        'captureButtonColors': ["#65d9fc", "#65d9fc"],
        'icon': {
          'url': "https://cdn.upanhlaylink.com/i/KMjL2bn1.png",
          'iconUrl': "https://cdn.upanhlaylink.com/i/KMjL2bn1.png",
          'remoteImage': "https://cdn.upanhlaylink.com/i/KMjL2bn1.png",
          'sfSymbol': "heart.fill",
          'symbol': "heart.fill",
          'emoji': ''
        },
        'outputUrl': null,
        'productUrl': null,
        'textColor': "#FFFFFF",
        'referenceImages': []
      }, {
        'uid': "khung_ngoi_sao_hong_pastel",
        'id': "khung_ngoi_sao_hong_pastel",
        'name': "Ngôi Sao Hồng",
        'category': "Frames",
        'prompt': "khung_ngoi_sao_hong_pastel",
        'style': "cutout",
        'type': "normal",
        'filterType': "cutout",
        'overlay': true,
        'imageUrl': "https://cdn.upanhlaylink.com/i/JNBpQnLu.png",
        'iconUrl': "https://cdn.upanhlaylink.com/i/JNBpQnLu.png",
        'overlayImageUrl': "https://cdn.upanhlaylink.com/i/JNBpQnLu.png",
        'overlayImageURL': "https://cdn.upanhlaylink.com/i/JNBpQnLu.png",
        'tintColor': "#FF758C",
        'colors': ["#FF758C", "#FF7EB3"],
        'captureButtonColors': ["#FF758C", "#FF7EB3"],
        'icon': {
          'url': "https://cdn.upanhlaylink.com/i/JNBpQnLu.png",
          'iconUrl': "https://cdn.upanhlaylink.com/i/JNBpQnLu.png",
          'remoteImage': "https://cdn.upanhlaylink.com/i/JNBpQnLu.png",
          'sfSymbol': "heart.fill",
          'symbol': "heart.fill",
          'emoji': ''
        },
        'outputUrl': null,
        'productUrl': null,
        'textColor': "#FFFFFF",
        'referenceImages': []
      }, {
        'uid': "khung_pastel_so_hai_cau",
        'id': "khung_pastel_so_hai_cau",
        'name': "Sò Hải Cẩu Pastel",
        'category': "Frames",
        'prompt': "khung_pastel_so_hai_cau",
        'style': "cutout",
        'type': "normal",
        'filterType': "cutout",
        'overlay': true,
        'imageUrl': "https://cdn.upanhlaylink.com/i/Gm6AI5Vf.png",
        'iconUrl': "https://cdn.upanhlaylink.com/i/Gm6AI5Vf.png",
        'overlayImageUrl': "https://cdn.upanhlaylink.com/i/Gm6AI5Vf.png",
        'overlayImageURL': "https://cdn.upanhlaylink.com/i/Gm6AI5Vf.png",
        'tintColor': "#cfedfc",
        'colors': ["#cfedfc", "#cfedfc"],
        'captureButtonColors': ["#cfedfc", "#cfedfc"],
        'icon': {
          'url': "https://cdn.upanhlaylink.com/i/Gm6AI5Vf.png",
          'iconUrl': "https://cdn.upanhlaylink.com/i/Gm6AI5Vf.png",
          'remoteImage': "https://cdn.upanhlaylink.com/i/Gm6AI5Vf.png",
          'sfSymbol': "heart.fill",
          'symbol': "heart.fill",
          'emoji': ''
        },
        'outputUrl': null,
        'productUrl': null,
        'textColor': "#FFFFFF",
        'referenceImages': []
      }, {
        'uid': "khung_shin_chan",
        'id': "khung_shin_chan",
        'name': "Shin-Chan",
        'category': "Frames",
        'prompt': "khung_shin_chan",
        'style': "cutout",
        'type': "normal",
        'filterType': "cutout",
        'overlay': true,
        'imageUrl': "https://cdn.upanhlaylink.com/i/ERSGe9wZ.png",
        'iconUrl': "https://cdn.upanhlaylink.com/i/ERSGe9wZ.png",
        'overlayImageUrl': "https://cdn.upanhlaylink.com/i/ERSGe9wZ.png",
        'overlayImageURL': "https://cdn.upanhlaylink.com/i/ERSGe9wZ.png",
        'tintColor': "#f00008",
        'colors': ["#f00008", "#faed32"],
        'captureButtonColors': ["#f00008", "#faed32"],
        'icon': {
          'url': "https://cdn.upanhlaylink.com/i/ERSGe9wZ.png",
          'iconUrl': "https://cdn.upanhlaylink.com/i/ERSGe9wZ.png",
          'remoteImage': "https://cdn.upanhlaylink.com/i/ERSGe9wZ.png",
          'sfSymbol': "heart.fill",
          'symbol': "heart.fill",
          'emoji': ''
        },
        'outputUrl': null,
        'productUrl': null,
        'textColor': "#FFFFFF",
        'referenceImages': []
      }, {
        'uid': "khung_anh_hellokitty_v_sao",
        'id': "khung_anh_hellokitty_v_sao",
        'name': "Hello Kitty & Sao",
        'category': "Frames",
        'prompt': "khung_anh_hellokitty_v_sao",
        'style': "cutout",
        'type': "normal",
        'filterType': "cutout",
        'overlay': true,
        'imageUrl': "https://cdn.upanhlaylink.com/i/ckAcbUl1.png",
        'iconUrl': "https://cdn.upanhlaylink.com/i/ckAcbUl1.png",
        'overlayImageUrl': "https://cdn.upanhlaylink.com/i/ckAcbUl1.png",
        'overlayImageURL': "https://cdn.upanhlaylink.com/i/ckAcbUl1.png",
        'tintColor': "#780c23",
        'colors': ["#780c23", "#a94770"],
        'captureButtonColors': ["#780c23", "#a94770"],
        'icon': {
          'url': "https://cdn.upanhlaylink.com/i/ckAcbUl1.png",
          'iconUrl': "https://cdn.upanhlaylink.com/i/ckAcbUl1.png",
          'remoteImage': "https://cdn.upanhlaylink.com/i/ckAcbUl1.png",
          'sfSymbol': "heart.fill",
          'symbol': "heart.fill",
          'emoji': ''
        },
        'outputUrl': null,
        'productUrl': null,
        'textColor': "#FFFFFF",
        'referenceImages': []
      }, {
        'uid': "khung_xanh_tay_sao_vang",
        'id': "khung_xanh_tay_sao_vang",
        'name': "Sao Vàng Xanh",
        'category': "Frames",
        'prompt': "khung_xanh_tay_sao_vang",
        'style': "cutout",
        'type': "normal",
        'filterType': "cutout",
        'overlay': true,
        'imageUrl': "https://cdn.upanhlaylink.com/i/GcdaJHFy.png",
        'iconUrl': "https://cdn.upanhlaylink.com/i/GcdaJHFy.png",
        'overlayImageUrl': "https://cdn.upanhlaylink.com/i/GcdaJHFy.png",
        'overlayImageURL': "https://cdn.upanhlaylink.com/i/GcdaJHFy.png",
        'tintColor': "#6fb1d3",
        'colors': ["#6fb1d3", "#cdd64c"],
        'captureButtonColors': ["#6fb1d3", "#cdd64c"],
        'icon': {
          'url': "https://cdn.upanhlaylink.com/i/GcdaJHFy.png",
          'iconUrl': "https://cdn.upanhlaylink.com/i/GcdaJHFy.png",
          'remoteImage': "https://cdn.upanhlaylink.com/i/GcdaJHFy.png",
          'sfSymbol': "heart.fill",
          'symbol': "heart.fill",
          'emoji': ''
        },
        'outputUrl': null,
        'productUrl': null,
        'textColor': "#FFFFFF",
        'referenceImages': []
      }, {
        'uid': "sinh_nhat_hello_kitty",
        'id': "sinh_nhat_hello_kitty",
        'name': "Sinh Nhật Hello Kitty",
        'category': "Frames",
        'prompt': "sinh_nhat_hello_kitty",
        'style': "cutout",
        'type': "normal",
        'filterType': "cutout",
        'overlay': true,
        'imageUrl': "https://cdn.upanhlaylink.com/i/eIXwHlV5.png",
        'iconUrl': "https://cdn.upanhlaylink.com/i/eIXwHlV5.png",
        'overlayImageUrl': "https://cdn.upanhlaylink.com/i/eIXwHlV5.png",
        'overlayImageURL': "https://cdn.upanhlaylink.com/i/eIXwHlV5.png",
        'tintColor': "#FF758C",
        'colors': ["#FF758C", "#FF7EB3"],
        'captureButtonColors': ["#FF758C", "#FF7EB3"],
        'icon': {
          'url': "https://cdn.upanhlaylink.com/i/eIXwHlV5.png",
          'iconUrl': "https://cdn.upanhlaylink.com/i/eIXwHlV5.png",
          'remoteImage': "https://cdn.upanhlaylink.com/i/eIXwHlV5.png",
          'sfSymbol': "heart.fill",
          'symbol': "heart.fill",
          'emoji': ''
        },
        'outputUrl': null,
        'productUrl': null,
        'textColor': "#FFFFFF",
        'referenceImages': []
      }, {
        'uid': "pb_single_y2k_silver_holo",
        'id': "pb_single_y2k_silver_holo",
        'name': "Khung Y2K Silver Holo",
        'category': "Frames",
        'prompt': "pb_single_y2k_silver_holo",
        'style': "cutout",
        'type': "normal",
        'filterType': "cutout",
        'overlay': true,
        'imageUrl': "https://cdn.upanhlaylink.com/i/x84e4vYZ.png",
        'iconUrl': "https://cdn.upanhlaylink.com/i/x84e4vYZ.png",
        'overlayImageUrl': "https://cdn.upanhlaylink.com/i/x84e4vYZ.png",
        'overlayImageURL': "https://cdn.upanhlaylink.com/i/x84e4vYZ.png",
        'tintColor': "#C4B5FD",
        'colors': ["#C4B5FD", "#E0E7FF"],
        'captureButtonColors': ["#C4B5FD", "#E0E7FF"],
        'icon': {
          'url': "https://cdn.upanhlaylink.com/i/x84e4vYZ.png",
          'iconUrl': "https://cdn.upanhlaylink.com/i/x84e4vYZ.png",
          'remoteImage': "https://cdn.upanhlaylink.com/i/x84e4vYZ.png",
          'sfSymbol': "heart.fill",
          'symbol': "heart.fill",
          'emoji': ''
        },
        'outputUrl': null,
        'productUrl': null,
        'textColor': "#FFFFFF",
        'referenceImages': []
      }, {
        'uid': "pb_single_denim_ripped",
        'id': "pb_single_denim_ripped",
        'name': "Khung Denim Cá Tính",
        'category': "Frames",
        'prompt': "pb_single_denim_ripped",
        'style': "cutout",
        'type': "normal",
        'filterType': "cutout",
        'overlay': true,
        'imageUrl': "https://cdn.upanhlaylink.com/i/77T1zXKS.png",
        'iconUrl': "https://cdn.upanhlaylink.com/i/77T1zXKS.png",
        'overlayImageUrl': "https://cdn.upanhlaylink.com/i/77T1zXKS.png",
        'overlayImageURL': "https://cdn.upanhlaylink.com/i/77T1zXKS.png",
        'tintColor': "#38BDF8",
        'colors': ["#38BDF8", "#93C5FD"],
        'captureButtonColors': ["#38BDF8", "#93C5FD"],
        'icon': {
          'url': "https://cdn.upanhlaylink.com/i/77T1zXKS.png",
          'iconUrl': "https://cdn.upanhlaylink.com/i/77T1zXKS.png",
          'remoteImage': "https://cdn.upanhlaylink.com/i/77T1zXKS.png",
          'sfSymbol': "heart.fill",
          'symbol': "heart.fill",
          'emoji': ''
        },
        'outputUrl': null,
        'productUrl': null,
        'textColor': "#FFFFFF",
        'referenceImages': []
      }, {
        'uid': "pb_single_film_nostalgia",
        'id': "pb_single_film_nostalgia",
        'name': "Khung Film Hoài Cổ",
        'category': "Frames",
        'prompt': "pb_single_film_nostalgia",
        'style': "cutout",
        'type': "normal",
        'filterType': "cutout",
        'overlay': true,
        'imageUrl': "https://cdn.upanhlaylink.com/i/gphwGSQG.png",
        'iconUrl': "https://cdn.upanhlaylink.com/i/gphwGSQG.png",
        'overlayImageUrl': "https://cdn.upanhlaylink.com/i/gphwGSQG.png",
        'overlayImageURL': "https://cdn.upanhlaylink.com/i/gphwGSQG.png",
        'tintColor': "#D6A36A",
        'colors': ["#D6A36A", "#FDE68A"],
        'captureButtonColors': ["#D6A36A", "#FDE68A"],
        'icon': {
          'url': "https://cdn.upanhlaylink.com/i/gphwGSQG.png",
          'iconUrl': "https://cdn.upanhlaylink.com/i/gphwGSQG.png",
          'remoteImage': "https://cdn.upanhlaylink.com/i/gphwGSQG.png",
          'sfSymbol': "heart.fill",
          'symbol': "heart.fill",
          'emoji': ''
        },
        'outputUrl': null,
        'productUrl': null,
        'textColor': "#FFFFFF",
        'referenceImages': []
      }, {
        'uid': "locket",
        'id': "locket",
        'name': "Practical Magic 2",
        'prompt': "locket",
        'productUrl': null,
        'colors': ["#7C3AED", "#C4B5FD"],
        'captureButtonColors': ["#7C3AED", "#C4B5FD"],
        'icon': {
          'url': "https://cdn.upanhlaylink.com/i/kyzGgnKy.png",
          'iconUrl': "https://cdn.upanhlaylink.com/i/kyzGgnKy.png",
          'remoteImage': "https://cdn.upanhlaylink.com/i/kyzGgnKy.png",
          'sfSymbol': "sparkles",
          'emoji': ''
        },
        'textColor': "#FFFFFF",
        'style': "cutout",
        'overlay': true,
        'overlayImageUrl': "https://cdn.upanhlaylink.com/i/kyzGgnKy.png",
        'overlayImageURL': "https://cdn.upanhlaylink.com/i/kyzGgnKy.png",
        'imageUrl': "https://cdn.upanhlaylink.com/i/kyzGgnKy.png",
        'iconUrl': "https://cdn.upanhlaylink.com/i/kyzGgnKy.png",
        'referenceImages': [],
        'type': "normal",
        'filterType': "cutout"
      }]
    }),
    'camera_filter_fetch_cache_max_age_seconds': '0',
    'capture_classification_config': JSON.stringify({
      'detection': true,
      'debug_caption': false,
      'expanded_sheet_legacy_support': true,
      'display_reaction_suggestions': true
    }),
    'camera_roll_preview_enabled': "true",
    'camera_roll_video_enabled': "true",
    'camera_roll_video_upload_enabled': "true",
    'internal_camera_roll_video_upload_enabled': "true",
    'longer_camera_roll_videos_enabled': "true",
    'video_sound_enabled': "true",
    'microphone_enabled': "true",
    'camera_microphone_enabled': "true",
    'audio_session_deactivation_enabled': "true",
    'zoom_enabled': "true",
    'upload_main': "false",
    'upload_main_image_quality': "0.6",
    'upload_main_image_size': "1440",
    'upload_thumbnail_image_quality': "0.8",
    'upload_thumbnail_image_size': "1020"
  });
  Object.assign(obj.entries, {
    'max_friends_count': "999999999",
    'friend_limit_mode': '0',
    'soft_friend_limit_threshold_count': "999999999",
    'show_friend_limit_on_cam': "false",
    'signup_max_friends_count': "999999999",
    'celebrity_inbox_limit': "999999999",
    'celebrity_inbox_enabled': "true",
    'celebrity_vip_qr_redemption_enabled': "true",
    'friend_limit_geo_override': JSON.stringify({
      'experiments': {},
      'area_code_overrides': {}
    }),
    'friends_sheet_locket_count_config': JSON.stringify({
      'items': [{
        'threshold': 0x0,
        'icon_name': "heart"
      }, {
        'threshold': 0x1,
        'icon_name': "heart.fill"
      }, {
        'threshold': 0xa,
        'emoji': '🤍'
      }, {
        'threshold': 0x64,
        'emoji': '💛'
      }, {
        'threshold': 0x1f4,
        'emoji': "❤️‍🔥"
      }, {
        'threshold': 0x3e8,
        'emoji': "🌟🫶🌟"
      }, {
        'threshold': 0x7d0,
        'emoji': "✨💟✨"
      }, {
        'threshold': 0x1388,
        'emoji': "⚡️😵‍💫⚡"
      }, {
        'threshold': 0x2710,
        'emoji': "✨⚡️😱⚡✨"
      }]
    }),
    'friend_locket_count_config': JSON.stringify({
      'items': [{
        'threshold': 0x0,
        'icon_name': "heart"
      }, {
        'threshold': 0x1,
        'icon_name': "heart.fill"
      }, {
        'threshold': 0xa,
        'emoji': '🤍'
      }, {
        'threshold': 0x64,
        'emoji': '💛'
      }, {
        'threshold': 0x1f4,
        'emoji': "❤️‍🔥"
      }, {
        'threshold': 0x3e8,
        'emoji': "✨💗✨"
      }, {
        'threshold': 0x7d0,
        'emoji': "✨️⭐️✨"
      }, {
        'threshold': 0x1388,
        'emoji': "✨💎✨"
      }, {
        'threshold': 0x2710,
        'emoji': "✨🔐💛✨"
      }]
    }),
    'new_friends_monitoring_enabled': "true",
    'improved_friend_suggestions': "true",
    'show_friend_suggestions_by_default': "true",
    'emoji_friend_suggestions': "true",
    'friend_suggestions_v2': "true",
    'prompt_contact_permissions_on_search': "true",
    'populate_phone_numbers_from_suggest_friends': "true",
    'hide_friends_enabled': "true",
    'hide_invite_links': "false",
    'hide_skip_contacts': "true",
    'show_all_contacts': "true",
    'show_invite_suggestions': "true",
    'show_no_friends_bottom_sheet': "false",
    'signup_allow_skip_add_friends': "true",
    'signup_custom_profile_picture': "true",
    'user_data_export_enabled': "true",
    'username_suggestions_enabled': "true"
  });
  try {
    var streak = JSON.parse(obj.entries.streak_config || '{}');
    streak.minimum_recovery_count = 0;
    streak.minimum_display_count = 0;
    obj.entries.streak_config = JSON.stringify(streak);
  } catch (_0x341330) {}
  Object.assign(obj.entries, {
    'daily_reminder_config': JSON.stringify({
      'is_time_sensitive': true,
      'items': [{
        'day': 0x1,
        'title_string': {
          'en': "Vào chụp Locket đi nha 💛"
        },
        'streak_body_string': {
          'en': "Lên hình giữ chuỗi ngày đi nào • 🔥#streak#"
        },
        'body_string': {
          'en': "Chụp một phát cho bạn bè lác mắt ⭐️"
        },
        'body_string_plural': {
          'en': "Chụp một phát cho bạn bè lác mắt ⭐️"
        }
      }, {
        'day': 0x3,
        'hour': 0xa,
        'title_string': {
          'en': "Này, nhớ bạn bè không vậy? 💛"
        },
        'body_string': {
          'en': "Gửi cho họ một ảnh bất ngờ đi! Đã #day# ngày rồi đó."
        },
        'body_string_plural': {
          'en': "Gửi cho họ một ảnh bất ngờ đi! Đã #day# ngày rồi đó."
        }
      }, {
        'day': 0x7,
        'hour': 0x13,
        'title_string': {
          'en': "Bạn bè đang ngóng kìa 💛"
        },
        'body_string': {
          'en': "Bạn bè nhớ bạn lắm đó. Đã #day# ngày rồi."
        },
        'body_string_plural': {
          'en': "Bạn bè nhớ bạn lắm đó. Đã #day# ngày rồi."
        }
      }, {
        'day': 0xe,
        'hour': 0xa,
        'title_string': {
          'en': "Lâu rồi đó nha, chụp đi 💛"
        },
        'body_string': {
          'en': "Đã #day# ngày rồi! Vào chụp ngay nha 🫶"
        },
        'body_string_plural': {
          'en': "Đã #day# ngày rồi! Vào chụp ngay nha 🫶"
        }
      }]
    })
  });
  Object.assign(obj.entries, {
    'moment_views_enabled': "true",
    'moment_views_v2': "true",
    'record_moment_views': "true",
    'notify_moment_views': "true",
    'get_moment_views_as_cloud_function': "true",
    'moment_reactions_v2': "true",
    'chat_reactions_enabled': "true",
    'conversation_reactions': "true",
    'typing_indicators_enabled': "true",
    'unsend_message_enabled': "true",
    'reply_prototype_enabled': "true",
    'messages_integration': "true",
    'conversations_enabled': "true",
    'fetch_moments_in_conversation': "true",
    'hide_chat_button': "false",
    'groups_enabled': "true",
    'group_contact_invites_enabled': "true",
    'groups_onboarding_accept_invite_preview_enabled': "true",
    'group_scrapbook_config': JSON.stringify({
      'enabled': true,
      'moment_limit': 0x3b9ac9ff,
      'default_layout': {
        'show_member_joined': true,
        'parallax_percentage': 0x32,
        'is_device_tilt_enabled': false,
        'cutout_percentage': 0x64
      },
      'photos_button_enabled': true
    }),
    'chat_hyperlink_enabled_mode': "always_enabled",
    'send_to_self_only_mode': "always_enabled",
    'time_travel_rewind_v2_enabled': "true",
    'conversation_drafts_enabled': '1',
    'calendar_delete_moment_enabled': "true",
    'calendar_rewind_enabled': "false",
    'locket_yearbook_story_sharing_encouraged': "true",
    'rollcall_enabled': "true",
    'rollcall_comment_actions': "true",
    'rollcall_profile_button': "true",
    'rollcall_prompt_export_after_share': "true",
    'rollcall_confirm_skip_tagging': "false",
    'rollcall_tap_to_tag_enabled': "false",
    'moment_upload_queue_persistence_v2': '1'
  });
  Object.assign(obj.entries, {
    'widget_frame_event_max_images': '5',
    'android_widget_frame_event_enabled': "true",
    'widget_badge_enabled': "true",
    'widget_badge_v2': "true",
    'widget_stale_state_enabled': "false",
    'widget_last_sent_indicator': "false",
    'widget_sync_token_reload_mode': "clearTokenNever",
    'widget_frame_event': JSON.stringify({
      'uid': "blank",
      'url': "https://i.ibb.co/1Yt1Dzzy/Shin-chan-1.png",
      'use_local_time_zone': true,
      'placement': "below",
      'start_at': "2026-11-11T00:00:00",
      'end_at': "2099-12-31T23:59:59",
      'custom_widget_frames': []
    }),
    'live_activity_onboarding': "true",
    'live_activity_onboarding_variant': "setup_ready_on_background",
    'register_live_activity_push_to_start_token': "true",
    'live_activity_remove_stale_start_token': "true",
    'notification_preferences_live_activities': "true",
    'notification_preferences': "true",
    'notification_reply_body_visible': "true",
    'prompt_notification_permissions_after_friending': "true",
    'activity_bar_enabled': "true",
    'journal_activity_bar_enabled': "true",
    'journal_settings': JSON.stringify({
      'debug_menu_enabled': false,
      'focus_animation': false,
      'compact_header': true,
      'friends_button': false,
      'reverse_scroll_direction': false,
      'streak_visualization': true,
      'streak_visualization_style': "gradient",
      'streak_header_minimum_count': 0x0,
      'streak_visualization_minimum_count': 0x2,
      'overlay_indicators': {
        'location': false,
        'music': true,
        'static_content': true,
        'weather': true
      }
    }),
    'qr_code_config': JSON.stringify({
      'profile_enabled': true,
      'scanning_enabled': true
    }),
    'birthday_feature_config': JSON.stringify({
      'profile_menu': true,
      'prompt_interval': 0x127500,
      'show_frame': true
    }),
    'calendar_friend_birthdays': JSON.stringify({
      'fetching': true,
      'calendar_display': true,
      'feature_popup': true,
      'settings_visibility_toggle_enabled': true,
      'fetch_ttl_seconds': 0x15180
    }),
    'custom_profile_pics': "true",
    'profile_menu_v2_enabled': "true"
  });
  Object.assign(obj.entries, {
    'cdn_domain_replacements': JSON.stringify({
      'firebasestorage.googleapis.com': "cdn.locketcamera.com"
    }),
    'cdn_domain_replacements_video': "true",
    'functions_domains': JSON.stringify(["https://api.locketcamera.com", "https://us-central1-locket-4252a.cloudfunctions.net"]),
    'storage_bucket': "gs://locket-img",
    'storage_bucket_video': "gs://locket-video",
    'camera_filter_storage_bucket': "gs://locket-filters",
    'image_cache_max_age_sec': "157680000",
    'image_cache_max_size': "400000000",
    'history_cache_age_days': "1000",
    'user_cache_max_age_sec': "691200",
    'friends_cache_max_age_sec': "2592000",
    'image_fetch_cache': "true",
    'image_cache_use_shared': "true",
    'use_doc_dir_for_image_cache': "true",
    'efficient_history_cache_invalidation': "true",
    'timestamp_based_history_fetches': "true",
    'get_latest_moment_v2': "true",
    'fetch_users_from_cloud_function': "true",
    'refresh_interval': '60',
    'firestore_refresh_v2': "true",
    'firestore_refresh_v3': "true",
    'keychain_access_retries': "true",
    'blocked_users_cached_sync_enabled': "true",
    'beta_features_enabled': "true",
    'join_testflight_enabled': "true",
    'safety_center': "true",
    'help_center': "true",
    'support_v2': "true",
    'privacy_choices_setting': "true",
    'request_att_permission': "true",
    'invite_link_preview_variant': '4',
    'share_history_config': JSON.stringify({
      'prompt_enabled': false,
      'fetching_enabled': true
    }),
    'share_history_prompt_enabled': "false",
    'use_thumbnails_for_sharing': "true",
    'use_thumbnails_in_timeline': "true",
    'upload_use_webp_thumbnails': "true",
    'persist_onboarding_step': "true",
    'onboarding_contact_permission_step': "true"
  });
  Object.assign(obj.entries, {
    'overlay_navigator_enabled': "true",
    'overlays_v2_config': JSON.stringify({
      'suggestions_enabled': true
    }),
    'captions_enabled': "true",
    'music_caption_enabled': "true",
    'music_caption_song_preview_enabled': "true",
    'link_caption_link_enabled': "true",
    'overlay_dynamic_captions': JSON.stringify(["standard", "poll", "color_palette", "review", "music", "location", "weather", "time", "streak", "star_sign", "party_time", "locket_count", "good_morning", "goodnight", "ootd", "miss_you", "custom", "halloween_2026"]),
    'overlay_items': JSON.stringify([{
      'section': "🎨 General",
      'items': [{
        'overlay_id': "caption:standard",
        'source': "local",
        'caption': {
          'type': "standard"
        },
        'sort_order': 0x0
      }, {
        'overlay_id': "caption:poll",
        'source': "local",
        'caption': {
          'type': "poll"
        },
        'sort_order': 0x1
      }, {
        'overlay_id': "caption:color_palette",
        'source': "local",
        'caption': {
          'type': "color_palette"
        },
        'sort_order': 0x2
      }, {
        'overlay_id': "caption:review",
        'source': "local",
        'caption': {
          'type': "review"
        },
        'sort_order': 0x3
      }, {
        'overlay_id': "caption:music",
        'source': "local",
        'caption': {
          'type': "music"
        },
        'sort_order': 0x4
      }, {
        'overlay_id': "caption:location",
        'source': "local",
        'caption': {
          'type': "location"
        },
        'sort_order': 0x5
      }, {
        'overlay_id': "caption:weather",
        'source': "local",
        'caption': {
          'type': "weather"
        },
        'sort_order': 0x6
      }, {
        'overlay_id': "caption:time",
        'source': "local",
        'caption': {
          'type': "time"
        },
        'sort_order': 0x7
      }, {
        'overlay_id': "caption:streak",
        'source': "local",
        'caption': {
          'type': "streak"
        },
        'sort_order': 0x8
      }, {
        'overlay_id': "caption:star_sign",
        'source': "local",
        'caption': {
          'type': "star_sign"
        },
        'sort_order': 0x9
      }, {
        'overlay_id': "caption:quote",
        'source': "local",
        'caption': {
          'type': "quote"
        },
        'sort_order': 0xa
      }, {
        'overlay_id': "caption:breaking_news",
        'source': "local",
        'caption': {
          'type': "breaking_news"
        },
        'sort_order': 0xb
      }]
    }, {
      'section': "🎨 Decorative by Locket",
      'items': [{
        'overlay_id': "caption:party_time",
        'source': "remote",
        'caption': {
          'background': {
            'colors': ["#5EFFF5", "#FCFF57"]
          },
          'icon': {
            'data': '🪩',
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "Quẩy thôi!",
          'text_color': "#000000E6",
          'type': "static_content"
        }
      }, {
        'overlay_id': "caption:good_morning",
        'source': "remote",
        'daily_start_hour': 0x5,
        'daily_end_hour': 0xa,
        'caption': {
          'background': {
            'colors': ["#EF7402", "#EABF0F"]
          },
          'icon': {
            'data': '☀️',
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "Chào ngày mới nè",
          'text_color': "#FFFFFFE5",
          'type': "static_content"
        }
      }, {
        'overlay_id': "caption:goodnight",
        'source': "remote",
        'daily_start_hour': 19.5,
        'daily_end_hour': 0x18,
        'caption': {
          'background': {
            'colors': ["#370C6F", "#575CD4"]
          },
          'icon': {
            'data': '🌙',
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "Ngủ ngon",
          'text_color': "#FFFFFFE6",
          'type': "static_content"
        }
      }, {
        'overlay_id': "caption:miss_you",
        'source': "remote",
        'caption': {
          'background': {
            'colors': ["#EC0C00", "#FF493F"]
          },
          'icon': {
            'data': '🥰',
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "Nhớ quá trờiii",
          'text_color': "#FFFFFFDB",
          'type': "static_content"
        }
      }, {
        'overlay_id': "caption:ootd",
        'source': "remote",
        'caption': {
          'background': {
            'colors': ["#FFFFFF", "#DBDBDB"]
          },
          'icon': {
            'data': '🕶',
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "OOTD",
          'text_color': "#101010E6",
          'type': "static_content"
        }
      }]
    }, {
      'section': "🎨 Custom Decorative",
      'items': [{
        'overlay_id': "caption:hoc_vien_c500",
        'source': "remote",
        'caption': {
          'background': {
			'colors': ["#D4F1E4", "#A3E4CB", "#76D7C4"]
          },
          'icon': {
            'data': '👮',
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "Học viên C500",
          'text_color': "#183153",
          'type': "static_content"
        }
	  }, {
        'overlay_id': "caption:tuat",
        'source': "remote",
        'caption': {
          'background': {
            'colors': ["#2C1A0E", "#5D4037", "#D7A86E"]
          },
          'icon': {
            'data': '🐕',
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "Tuất",
          'text_color': "#FFFFFFE6",
          'type': "static_content"
        }
      }, {
        'overlay_id': "caption:du_an_ma",
        'source': "remote",
        'caption': {
          'background': {
            'colors': ["#263238", "#455A64"]
          },
          'icon': {
            'data': '👻',
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "Dự án ma",
          'text_color': "#FFFFFFE6",
          'type': "static_content"
        }
      }, {
        'overlay_id': "caption:love_vietnam",
        'source': "remote",
        'alt_text': "Tôi yêu Việt Nam",
        'caption': {
          'background': {
            'image': {
              'type': "image",
              'data': "star_sign_background",
              'source': "local"
            },
            'colors': ["#DA251D", "#DA251D"]
          },
          'icon': {
            'type': "image",
            'data': "https://storage.googleapis.com/locket-public/journal_calendar_assets/holiday_indicators/valentines_indicator%403x.png",
            'source': "url"
          },
          'max_lines': 0x1,
          'text': "Tôi yêu Việt Nam",
          'text_color': "#FFFF00",
          'type': "static_content"
        }
      }, {
        'overlay_id': "caption:film_diary",
        'source': "remote",
        'alt_text': "Một ngày rất chill",
        'caption': {
          'background': {
            'image': {
              'type': "image",
              'data': "https://public.locketcamera.com/locket-public/gold_promos/gold_promo_camera_roll.png",
              'source': "url"
            },
            'colors': ["#D2B48C", "#8B4513"]
          },
          'icon': {
            'type': "image",
            'data': "https://public.locketcamera.com/locket-public/journal_calendar_assets/holiday_indicators/st_patricks_indicator%403x.png",
            'source': "url"
          },
          'max_lines': 0x1,
          'text': "Một ngày rất chill",
          'text_color': "#FFFDD0",
          'type': "static_content"
        }
      }, {
        'overlay_id': "caption:strangers",
        'source': "remote",
        'alt_text': "Người lạ",
        'caption': {
          'background': {
            'image': {
              'type': "image",
              'data': "https://public.locketcamera.com/locket-public/gold_promos/gold_promo_views.png",
              'source': "url"
            },
            'colors': ["#1C1C1E", "#2C2C2E"]
          },
          'icon': {
            'data': "eye.fill",
            'type': "sf_symbol",
            'color': "#0A84FF"
          },
          'max_lines': 0x1,
          'text': "Người lạ",
          'text_color': "#FFFFFF",
          'type': "static_content"
        }
      }, {
        'overlay_id': "caption:genz_flex",
        'source': "remote",
        'alt_text': "Mood: Chill",
        'caption': {
          'background': {
            'image': {
              'type': "image",
              'data': "https://public.locketcamera.com/locket-public/gold_promos/gold_promo_widgets.png",
              'source': "url"
            },
            'colors': ["#FF9A9E", "#FECFEF"]
          },
          'icon': {
            'data': "camera.fill",
            'type': "sf_symbol",
            'color': "#FF007F"
          },
          'max_lines': 0x1,
          'text': "Mood: Chill 💅",
          'text_color': "#FFFFFF",
          'type': "static_content"
        }
      }]
    }, {
      'section': "🎨 Tình yêu 💕",
      'items': [{
        'overlay_id': "caption:wedding_time",
        'source': "remote",
        'caption': {
          'background': {
            'colors': ["#FFE4E1", "#E73C7E"]
          },
          'icon': {
            'data': '💍',
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "Wedding Time!",
          'text_color': "#FFFFFFE6",
          'type': "static_content"
        }
      }, {
        'overlay_id': "caption:dating_time",
        'source': "remote",
        'caption': {
          'background': {
            'colors': ["#E91E63", "#F44336"]
          },
          'icon': {
            'data': '💕',
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "Dating Time!",
          'text_color': "#FFFFFFE6",
          'type': "static_content"
        }
      }]
    }, {
      'section': "🎨 Gen Z & Flex 💅",
      'items': [{
        'overlay_id': "caption:feeling_cute",
        'source': "remote",
        'caption': {
          'background': {
            'colors': ["#F8BBD0", "#E91E63"]
          },
          'icon': {
            'data': '🌷',
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "Feeling Cute",
          'text_color': "#FFFFFFE5",
          'type': "static_content"
        }
      }, {
        'overlay_id': "caption:cutie_pie",
        'source': "remote",
        'caption': {
          'background': {
            'colors': ["#FFDEE9", "#FFB6C1", "#FF9AA2"]
          },
          'icon': {
            'data': '🎀',
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "Cutie Pie 🌸",
          'text_color': "#FFFFFFE6",
          'type': "static_content"
        }
      }, {
        'overlay_id': "caption:hello_kitty",
        'source': "remote",
        'caption': {
          'background': {
            'colors': ["#FFD1DC", "#FFB7C5", "#FFC0CB"]
          },
          'icon': {
            'data': '🌸',
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "Hello Kitty 🐱",
          'text_color': "#FFFFFFE6",
          'type': "static_content"
        }
      }, {
        'overlay_id': "caption:tinh_hoa_hoi_tu",
        'source': "remote",
        'caption': {
          'background': {
            'image': {
              'type': "image",
              'data': "star_sign_background",
              'source': "local"
            },
            'colors': ["#FFD700", "#FF8C00"]
          },
          'icon': {
            'type': "sf_symbol",
            'data': "wand.and.sparkles",
            'color': "#000000E6"
          },
          'max_lines': 0x1,
          'text': "Tinh hoa hội tụ",
          'text_color': "#000000E6",
          'type': "static_content"
        }
      }, {
        'overlay_id': "caption:oach_xa_lach",
        'source': "remote",
        'caption': {
          'background': {
            'colors': ["#11998E", "#38EF7D"]
          },
          'icon': {
            'data': '🥬',
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "Oách xà lách",
          'text_color': "#FFFFFF",
          'type': "static_content"
        }
      }, {
        'overlay_id': "caption:nhin_la_biet_uy_tin",
        'source': "remote",
        'caption': {
          'background': {
            'colors': ["#2980B9", "#2C3E50"]
          },
          'icon': {
            'data': '👌',
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "Nhìn là biết uy tín",
          'text_color': "#FFFFFFE6",
          'type': "static_content"
        }
      }, {
        'overlay_id': "caption:flex_den_hoi_tho_cuoi",
        'source': "remote",
        'caption': {
          'background': {
            'colors': ["#00BFA5", "#64E8C8", "#C4FFF0"]
          },
          'icon': {
            'data': '💎',
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "Flex đến hơi thở cuối",
          'text_color': "#064D43",
          'type': "static_content"
        }
      }, {
        'overlay_id': "caption:ae_san_san",
        'source': "remote",
        'caption': {
          'background': {
            'colors': ["#C5DDF1", "#C9E8E9", "#D8EAD8"]
          },
          'icon': {
            'data': '🚀',
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "Anh em sẵn sàng",
          'text_color': "#405D70",
          'type': "static_content"
        }
      }]
    }, {
      'section': "🎨 Meme 🤡",
      'items': [{
        'overlay_id': "caption:hong_drama",
        'source': "remote",
        'caption': {
          'background': {
            'colors': ["#8A2387", "#E94057", "#F27121"]
          },
          'icon': {
            'data': '🍿',
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "Hóng drama",
          'text_color': "#FFFFFFE6",
          'type': "static_content"
        }
      }, {
        'overlay_id': "caption:chay_ngay_di",
        'source': "remote",
        'caption': {
          'background': {
            'colors': ["#D31027", "#EA384D"]
          },
          'icon': {
            'data': "🏃💨",
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "Chạy ngay đi",
          'text_color': "#FFFFFFE6",
          'type': "static_content"
        }
      }, {
        'overlay_id': "caption:hao_han",
        'source': "remote",
        'caption': {
          'background': {
            'colors': ["#292E49", "#8E3B46", "#E09F3E"]
          },
          'icon': {
            'data': "🗡️",
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "Hảo hán",
          'text_color': "#FFFFFF",
          'type': "static_content"
        }
      }, {
        'overlay_id': "caption:mong_ton_hoa_sen",
        'source': "remote",
        'caption': {
          'background': {
            'colors': ["#D8B4E2", "#F8BBD0"]
          },
          'icon': {
            'data': '🪷',
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "Mong Tôn Hoa Sen thấy cảnh này",
          'text_color': "#FFFFFFE6",
          'type': "static_content"
        }
      }]
    }, {
      'section': "🎨 Tâm trạng 🫠",
      'items': [{
        'overlay_id': "caption:het_cuu_thiet",
        'source': "remote",
        'caption': {
          'background': {
            'colors': ["#B8C9E8", "#D5D5F0", "#E9CDE0"]
          },
          'icon': {
            'data': '🫠',
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "Hết cứu thiệt chứ",
          'text_color': "#454660",
          'type': "static_content"
        }
      }]
    }, {
      'section': "🎨 Deadline, Học hành & Tiền 💸",
      'items': [{
        'overlay_id': "caption:di_lam_vi_dam_me",
        'source': "remote",
        'caption': {
          'background': {
            'colors': ["#FDC830", "#F37335"]
          },
          'icon': {
            'data': '🤡',
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "Đi làm vì đam mê",
          'text_color': "#FFFFFF",
          'type': "static_content"
        }
      }, {
        'overlay_id': "caption:ca_o_ran_doc",
        'source': "remote",
        'caption': {
          'background': {
            'colors': ["#0F2027", "#1B5E20", "#66BB6A"]
          },
          'icon': {
            'data': '🐍',
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "Cả ổ rắn độc",
          'text_color': "#FFFFFFE6",
          'type': "static_content"
        }
      }]
    }, {
      'section': "🎨 Daily ☕",
      'items': [{
        'overlay_id': "caption:coffee_time",
        'source': "remote",
        'caption': {
          'background': {
            'colors': ["#4E342E", "#8D6E63"]
          },
          'icon': {
            'data': '☕',
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "Coffee Time!",
          'text_color': "#FFFFFFE6",
          'type': "static_content"
        }
      }, {
        'overlay_id': "caption:matcha_latte",
        'source': "remote",
        'caption': {
          'background': {
            'colors': ["#C8E6C9", "#A5D6A7", "#81C784"]
          },
          'icon': {
            'data': '🍃',
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "Matcha Latte 🍵",
          'text_color': "#1B5E20E6",
          'type': "static_content"
        }
      }, {
        'overlay_id': "caption:mixue_time",
        'source': "remote",
        'caption': {
          'background': {
            'colors': ["#FFF9C4", "#F8BBD0"]
          },
          'icon': {
            'data': '🍦',
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "Mixue Time!",
          'localized_text': {
            'en': "Mixue Time!",
            'vn': "Giờ Mixue!"
          },
          'text_color': "#000000E6",
          'type': "static_content"
        }
      }, {
        'overlay_id': "caption:dinner_time",
        'source': "remote",
        'caption': {
          'background': {
            'colors': ["#FFCCBC", "#FF8A80"]
          },
          'icon': {
            'data': "🍽️",
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "Dinner Time!",
          'localized_text': {
            'en': "Dinner Time!",
            'vn': "Giờ ăn tối!"
          },
          'text_color': "#FFFFFFE6",
          'type': "static_content"
        }
      }, {
        'overlay_id': "caption:shopping_time",
        'source': "remote",
        'caption': {
          'background': {
            'colors': ["#B3E5FC", "#FFFFFF"]
          },
          'icon': {
            'data': "🛍️",
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "Shopping Time!",
          'localized_text': {
            'en': "Shopping Time!",
            'vn': "Giờ mua sắm!"
          },
          'text_color': "#000000E6",
          'type': "static_content"
        }
      }, {
        'overlay_id': "caption:cinema_time",
        'source': "remote",
        'caption': {
          'background': {
            'colors': ["#1A237E", "#455A64"]
          },
          'icon': {
            'data': '🎬',
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "Cinema Time!",
          'text_color': "#FFFFFFE6",
          'type': "static_content"
        }
      }, {
        'overlay_id': "caption:tuyet_doi_dien_anh",
        'source': "remote",
        'caption': {
          'background': {
            'colors': ["#455A64", "#263238"]
          },
          'icon': {
            'data': '📷',
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "Tuyệt đối điện ảnh",
          'text_color': "#FFFFFFE6",
          'type': "static_content"
        }
      }, {
        'overlay_id': "caption:chilling_time",
        'source': "remote",
        'caption': {
          'background': {
            'colors': ["#E1BEE7", "#F8BBD0"]
          },
          'icon': {
            'data': '🌴',
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "Chilling Time!",
          'localized_text': {
            'en': "Chilling Time!",
            'vn': "Giờ thư giãn!"
          },
          'text_color': "#FFFFFFE6",
          'type': "static_content"
        }
      }, {
        'overlay_id': "caption:graduation_day",
        'source': "remote",
        'caption': {
          'background': {
            'colors': ["#1A237E", "#283593"]
          },
          'icon': {
            'data': '🎓',
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "Happy Graduation Day!",
          'text_color': "#FFFFFFE6",
          'type': "static_content"
        }
      }, {
        'overlay_id': "caption:bien_oiiii",
        'source': "remote",
        'caption': {
          'background': {
            'colors': ["#56CFE1", "#72EFDD", "#B8F3FF"]
          },
          'icon': {
            'data': '🌊',
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "Biển ơiii",
          'text_color': "#124559",
          'type': "static_content"
        }
      }, {
        'overlay_id': "caption:hoi_chieu_troi_mua",
        'source': "remote",
        'caption': {
          'background': {
            'image': {
              'type': "image",
              'data': "cloud_cover",
              'source': "local"
            },
            'colors': ["#546E7A", "#263238"]
          },
          'icon': {
            'data': "🌧️",
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "Hồi chiều trời mưa...",
          'text_color': "#FFFFFFE6",
          'type': "static_content"
        }
      }, {
        'overlay_id': "caption:rainy_day",
        'source': "remote",
        'caption': {
          'background': {
            'image': {
              'type': "image",
              'data': "cloud_cover",
              'source': "local"
            },
            'colors': ["#6D4C41", "#8D6E63", "#BCAAA4"]
          },
          'icon': {
            'data': '☕',
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "Ngày mưa 🌧️",
          'text_color': "#FFFFFFE6",
          'type': "static_content"
        }
      }, {
        'overlay_id': "caption:night_vibes",
        'source': "remote",
        'caption': {
          'background': {
            'colors': ["#B993D6", "#8CA6DB", "#C9B1FF"]
          },
          'icon': {
            'data': '🪐',
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "Night Vibes 🌌",
          'text_color': "#FFFFFFE6",
          'type': "static_content"
        }
      }, {
        'overlay_id': "caption:2am_thoughts",
        'source': "remote",
        'daily_start_hour': 0x1,
        'daily_end_hour': 0x3,
        'caption': {
          'background': {
            'colors': ["#0F2027", "#203A43", "#2C5364"]
          },
          'icon': {
            'type': "sf_symbol",
            'data': "cloud.bolt.fill",
            'color': "#FFFFFFE6"
          },
          'max_lines': 0x1,
          'text': "2:00 AM Thoughts 🌙",
          'text_color': "#FFFFFFE6",
          'type': "static_content"
        }
      }, {
        'overlay_id': "caption:nhiem_vu_di_ngu",
        'source': "remote",
        'caption': {
          'background': {
            'colors': ["#172554", "#334EAC", "#91A7FF"]
          },
          'icon': {
            'data': '🫡',
            'type': "emoji"
          },
          'max_lines': 0x1,
          'text': "Nhiệm vụ hệ thống: Đi ngủ",
          'text_color': "#FFFFFF",
          'type': "static_content"
        }
      }]
    }])
  });
}
$done({
  'body': JSON.stringify(obj)
});