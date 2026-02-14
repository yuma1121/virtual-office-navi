export interface VirtualOfficeService {
  key: string;
  name: string;
  price: string;
  initCost: string;
  locations: string;
  locationCount: number;
  features: string[];
  link: string;
  areas: {
    tokyo: string[];
    regional: string[];
  };
  capabilities: {
    registration: boolean;
    mailForward: boolean;
    phone: boolean;
    meetingRoom: boolean;
    ecommerce: boolean;
  };
  reasons: Record<string, string>;
  pros: string[];
  cons: string[];
}

export const services: VirtualOfficeService[] = [
  {
    key: 'gmo',
    name: 'GMOオフィスサポート',
    price: '月額660円〜',
    initCost: '0円',
    locations: '全国19拠点',
    locationCount: 19,
    features: ['初期費用0円', '全国19拠点', '転送料込み'],
    link: '/blog/gmo-office-support-review',
    areas: {
      tokyo: ['渋谷', '新宿', '銀座', '青山', '秋葉原'],
      regional: ['横浜', '名古屋', '大阪', '京都', '神戸', '福岡', '札幌', '仙台', '広島'],
    },
    capabilities: {
      registration: true,
      mailForward: true,
      phone: false,
      meetingRoom: false,
      ecommerce: false,
    },
    reasons: {
      default: '初期費用0円・月額660円〜の業界最安クラス。GMOグループの安心感も魅力です。',
      budget_low: '月額660円〜で初期費用も完全無料。郵便転送料金も基本料に含まれるコスパ最強サービスです。',
      area_regional: '名古屋・大阪・福岡など全国19拠点に対応。地方都市でも使える安心感があります。',
      purpose_reg: '法人登記対応プランが月額1,650円〜。GMOあおぞらネット銀行との連携で口座開設もスムーズ。',
      priority_trust: 'GMOインターネットグループ運営で安心感抜群。月額660円〜の業界最安クラスも魅力です。',
    },
    pros: [
      '業界最安クラスの月額660円〜',
      '初期費用・保証金0円',
      '郵便転送料金が基本料に含まれる',
      'GMOグループの信頼性',
      '全国19拠点の幅広いエリア対応',
    ],
    cons: [
      '電話転送・電話秘書サービスなし',
      '会議室利用不可',
      '最安プランでは法人登記不可',
    ],
  },
  {
    key: 'resonance',
    name: 'レゾナンス',
    price: '月額990円〜',
    initCost: '5,500円',
    locations: '東京9・横浜・大阪',
    locationCount: 11,
    features: ['法人登記990円〜', '全店舗会議室', '4銀行紹介'],
    link: '/blog/gmo-vs-resonance',
    areas: {
      tokyo: ['港区浜松町', '銀座', '渋谷', '新宿', '青山', '恵比寿', '日本橋', '品川', '千駄ヶ谷'],
      regional: ['横浜', '大阪'],
    },
    capabilities: {
      registration: true,
      mailForward: true,
      phone: true,
      meetingRoom: true,
      ecommerce: false,
    },
    reasons: {
      default: '法人登記が月額990円〜で業界最安級。全店舗に会議室完備、4つの銀行紹介にも対応。',
      priority_mail: '郵便物の写真通知が全プラン無料。港区浜松町の住所で週1回の転送も付いてきます。',
      area_tokyo: '港区・銀座・渋谷など東京都心に11店舗。全店舗で会議室が使えるのも魅力です。',
      purpose_reg: '法人登記990円〜は格安。みずほ銀行を含む4行の紹介制度で口座開設もサポートします。',
    },
    pros: [
      '法人登記対応で月額990円〜の低価格',
      '全店舗に会議室完備',
      '郵便物の写真通知が全プラン無料',
      'みずほ銀行含む4行の口座開設紹介',
      '電話秘書代行オプションあり',
    ],
    cons: [
      '初期費用5,500円が必要',
      '地方拠点が少ない（横浜・大阪のみ）',
      '電話転送はオプション料金',
    ],
  },
  {
    key: 'nawabari',
    name: 'NAWABARI',
    price: '月額1,100円〜',
    initCost: '0〜5,500円',
    locations: '目黒1拠点',
    locationCount: 1,
    features: ['EC/特商法特化', 'BASEパートナー', 'プライバシーマーク'],
    link: '/blog/virtual-office-netshop',
    areas: {
      tokyo: ['目黒'],
      regional: [],
    },
    capabilities: {
      registration: false,
      mailForward: true,
      phone: true,
      meetingRoom: false,
      ecommerce: true,
    },
    reasons: {
      default: 'ネットショップの特商法対策に特化。BASEの公式パートナーで、プライバシーマーク取得済みの安心感。',
      persona_ec: 'EC運営者のために作られたサービス。BASE公式パートナーで特商法表記にそのまま使えます。',
      purpose_privacy: 'プライバシーマーク取得済み、GPS・盗聴器チェックまで実施。個人情報保護を最優先にするなら最適。',
    },
    pros: [
      'EC・ネットショップ特化で特商法対策万全',
      'BASEの公式パートナー',
      'プライバシーマーク取得済み',
      'GPS・盗聴器チェック実施済み',
      '電話要件転送サービスあり',
    ],
    cons: [
      '拠点が目黒の1か所のみ',
      '法人登記には非対応',
      '会議室利用不可',
    ],
  },
  {
    key: 'dmm',
    name: 'DMMバーチャルオフィス',
    price: '月額660円〜',
    initCost: '5,500円',
    locations: '全国14拠点',
    locationCount: 14,
    features: ['大手DMM運営', '全国14拠点', '全拠点会議室'],
    link: '/blog/virtual-office-tokyo',
    areas: {
      tokyo: ['渋谷', '銀座', '青山'],
      regional: ['横浜', '大阪梅田', '大阪心斎橋', '京都', '名古屋', '福岡', '札幌', '沖縄'],
    },
    capabilities: {
      registration: true,
      mailForward: true,
      phone: true,
      meetingRoom: true,
      ecommerce: false,
    },
    reasons: {
      default: '大手DMMグループが運営する安心のサービス。渋谷・銀座など一等地の住所が月額660円〜。',
      purpose_brand: '渋谷・銀座・青山など一等地住所が月額660円〜。大手DMMの知名度で取引先への信頼度もアップ。',
      priority_trust: 'DMMグループ運営で抜群の安心感。全拠点に会議室完備、AI秘書サービスも利用可能です。',
      area_regional: '札幌から沖縄まで全国14拠点。大手ならではの幅広いエリアカバーが魅力です。',
    },
    pros: [
      'DMMグループ運営の高い信頼性',
      '月額660円〜の低価格',
      '全拠点に会議室完備',
      'AI秘書サービスが利用可能',
      '全国14拠点の幅広いエリア対応',
    ],
    cons: [
      '初期費用5,500円が必要',
      '最安プランでは法人登記不可',
      '郵便転送はオプション料金',
    ],
  },
  {
    key: 'onestop',
    name: 'ワンストップビジネスセンター',
    price: '月額5,280円〜',
    initCost: '10,780円',
    locations: '全国48拠点',
    locationCount: 48,
    features: ['全国48拠点', '電話秘書代行', '30日返金保証'],
    link: '/blog/virtual-office-osusume',
    areas: {
      tokyo: ['港区南青山', '虎ノ門', '銀座', '品川', '新宿', '渋谷'],
      regional: ['横浜', '大宮', '千葉', '名古屋', '大阪', '京都', '神戸', '福岡', '仙台', '札幌', '広島', '浜松', '金沢'],
    },
    capabilities: {
      registration: true,
      mailForward: true,
      phone: true,
      meetingRoom: true,
      ecommerce: false,
    },
    reasons: {
      default: '全国48拠点＋電話秘書代行＋会議室のフルサービス。30日間返金保証で安心して始められます。',
      purpose_office: '電話秘書代行・会議室・来客対応まで揃うオールインワン。リアルオフィスに近い環境が手に入ります。',
      area_local: '北海道から九州まで全国48拠点。地方都市でもフルサービスのバーチャルオフィスが使えます。',
    },
    pros: [
      '全国48拠点で業界トップクラスのエリア対応',
      '電話秘書代行サービスが充実',
      '全拠点に会議室完備',
      '30日間返金保証あり',
      '来客対応サービスも利用可能',
    ],
    cons: [
      '月額5,280円〜で価格は高め',
      '初期費用10,780円が必要',
      '低コスト重視の方には不向き',
    ],
  },
  {
    key: 'karigo',
    name: 'Karigo',
    price: '月額3,300円〜',
    initCost: '5,500円',
    locations: '全国60拠点以上',
    locationCount: 60,
    features: ['全国60拠点以上', '創業20年', '転送頻度自由'],
    link: '/blog/virtual-office-osusume',
    areas: {
      tokyo: ['銀座', '新宿', '渋谷', '品川', '日本橋'],
      regional: ['横浜', '名古屋', '大阪', '京都', '福岡', '札幌', '仙台', '広島', '金沢', '高松', '那覇', '鹿児島'],
    },
    capabilities: {
      registration: true,
      mailForward: true,
      phone: true,
      meetingRoom: false,
      ecommerce: false,
    },
    reasons: {
      default: '創業20年・全国60拠点以上の老舗サービス。郵便転送頻度を自由に変更できる柔軟さが魅力。',
      area_local: '全国60拠点以上で業界最多。地方都市でも選べる拠点の多さはKarigoならでは。',
    },
    pros: [
      '全国60拠点以上で業界最多の拠点数',
      '創業20年の運営実績',
      '郵便転送頻度を自由に変更可能',
      '電話転送・電話代行に対応',
    ],
    cons: [
      '月額3,300円〜で格安とは言えない',
      '初期費用5,500円が必要',
      '会議室利用不可の拠点が多い',
    ],
  },
  {
    key: 'vo1',
    name: 'バーチャルオフィス1',
    price: '月額880円〜',
    initCost: '0円',
    locations: '渋谷/千代田/広島',
    locationCount: 3,
    features: ['法人登記最安880円', '初期費用0円', '口座開設保証'],
    link: '/blog/virtual-office-osusume',
    areas: {
      tokyo: ['渋谷', '千代田区'],
      regional: ['広島'],
    },
    capabilities: {
      registration: true,
      mailForward: true,
      phone: false,
      meetingRoom: false,
      ecommerce: false,
    },
    reasons: {
      default: '法人登記対応で月額880円は業界最安値。初期費用も0円で、法人口座開設保証制度も付き。',
      budget_low: '法人登記込みで月額880円＋初期費用0円。年間コスト10,560円は業界トップクラスの安さです。',
      purpose_reg: '法人登記880円〜は業界最安。口座開設保証制度付きで、法人設立をトータルでサポート。',
    },
    pros: [
      '法人登記込みで月額880円の業界最安',
      '初期費用・保証金0円',
      '法人口座開設保証制度あり',
      'DM破棄サービスあり',
    ],
    cons: [
      '拠点が3か所のみ（渋谷/千代田/広島）',
      '電話転送・電話秘書サービスなし',
      '会議室利用不可',
    ],
  },
  {
    key: 'united',
    name: 'ユナイテッドオフィス',
    price: '月額2,310円〜',
    initCost: '6,600円',
    locations: '東京9拠点',
    locationCount: 9,
    features: ['東京一等地9拠点', '全拠点会議室', '実績21年'],
    link: '/blog/virtual-office-osusume',
    areas: {
      tokyo: ['銀座', '表参道', '青山', '虎ノ門', '新橋', '渋谷', '日本橋', '池袋', '新宿'],
      regional: [],
    },
    capabilities: {
      registration: true,
      mailForward: true,
      phone: true,
      meetingRoom: true,
      ecommerce: false,
    },
    reasons: {
      default: '銀座・青山・表参道など東京一等地に9拠点。全拠点で会議室が使える21年の実績。',
      area_tokyo: '東京の一等地に特化した9拠点。銀座・青山・表参道の住所でビジネスの信頼度を高められます。',
      purpose_brand: '銀座・青山・虎ノ門など東京プレミアム住所に特化。21年の運営実績と自社物件の安定感が強み。',
    },
    pros: [
      '東京一等地に特化した9拠点',
      '全拠点に会議室完備',
      '21年の運営実績',
      '自社物件で安定した運営',
      '電話秘書代行オプションあり',
    ],
    cons: [
      '東京以外の拠点がない',
      '初期費用6,600円が必要',
      '月額2,310円〜で最安ではない',
    ],
  },
];

export const serviceMap = Object.fromEntries(
  services.map((s) => [s.key, s])
) as Record<string, VirtualOfficeService>;
