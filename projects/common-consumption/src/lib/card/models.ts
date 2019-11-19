export interface ICardClick {
    event: MouseEvent;
    data: IContent;
}

export interface IClick {
    event: MouseEvent;
    data: any;
}

export enum LibraryCardTypes {
    RECENTLY_VIEWED = 'recently_viewed',
    MOBILE_TEXTBOOK = 'mobile_textbook',
    DESKTOP_TEXTBOOK = 'desktop_textbook',
    QRCODE_RESULT = 'qrcode_result'
}

export enum LibraryCardGridTypes {
    INFINITE_CARD_GRID = 'infinite_card_grid'
}

export enum LibraryCardStackTypes {
    INFINITE_CARD_STACK = 'infinite_card_stack'
}

export interface IBadge {
    issuerId: string;
    assertionId: string;
    badgeClassImage: string;
    badgeId: string;
    badgeClassName: string;
    createdTS: number;
    status: string;
}

export interface IContent {
    appIcon: string;
    name: string;
    subject: string | string[];
    gradeLevel: string[];
    badgeAssertions: IBadge[];
    resourceType: string;
    medium?: string | string[];
    creator?: string;
    organisation?: string[];
    body?: any;
    mimeType?: string;
    contentType?: string;
    identifier?: string;
    versionKey?: string;
    me_averageRating?: string | number;
    description?: string;
    artifactUrl?: string;
    audience?: any;
    code?: string;
    collections?: any;
    concepts?: any;
    createdBy?: string;
    createdOn?: string;
    contributors?: string;
    attributions?: string[];
    creators?: string;
    owner?: string;
    framework?: string;
    language?: string[];
    languageCode?: string;
    lastUpdatedOn?: string;
    mediaType?: string;
    organisationIds?: string[];
    osId?: string;
    publisher?: string;
    status?: string;
    usedByContent?: any;
    userId?: string;
    userName?: string;
    pkgVersion?: string;
    visibility?: string;
}
