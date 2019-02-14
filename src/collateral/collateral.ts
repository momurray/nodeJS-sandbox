export class WebAsset {
    id: string;
    bannertitle: string;
    offerheader: string;
    longcopy: string;
    shortcopy: string;
    logo100x50: string;
    logo200x100: string;
}

export class EmailAsset {
    id: string;
    bannertitle: string;
    offerheader: string;
    longcopy: string;
    shortcopy: string;
    logo100x50: string;
    logo200x100: string;
}
export class Collateral {

    private static webassets: WebAsset[] = [
        {
            id: "1", bannertitle: "Shop today", offerheader: "5% back over £50", longcopy: "Get 5% back in MyRewards for any spend over £50",
            shortcopy: "5% for £50", logo100x50: "sonycs330.png", logo200x100: "sonycx330.png"
        }
    ];

    private static emailassets: EmailAsset[] = [
        {
            id: "1", bannertitle: "Shop today", offerheader: "5% back over £50", longcopy: "Get 5% back in MyRewards for any spend over £50",
            shortcopy: "5% for £50", logo100x50: "sonycs330.png", logo200x100: "sonycx330.png"
        }
    ];

    getWebAssetById(id: string): WebAsset {
        return Collateral.webassets.find(o => o.id === id);
    }

    getEmailAssetById(id: string): WebAsset {
        return Collateral.webassets.find(o => o.id === id);
    }
}
