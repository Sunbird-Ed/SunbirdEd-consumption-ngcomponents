export interface ICardClick {
    event: MouseEvent;
    data: any;
}

export interface IClick {
    event: MouseEvent;
    data: any;
}

export enum LibraryCardTypes {
    RECENTLY_VIEWED = 'recently_viewed',
    MOBILE_TEXTBOOK = 'mobile_textbook',
    DESKTOP_TEXTBOOK = 'desktop_textbook',
    QRCODE_RESULT = 'qrcode_result',
    PORTAL_QRCODE_FLATRESULT =  'portal_qrcode_flatresult'
}

export enum CourseCardGridTypes {
    MY_COURSE_CARD_GRID = "my_course_card_grid",
    COURSE_CARD_GRID = "course_card_grid",
    MY_COURSE_RECENTLY_VIEWED_CARD_GRID = "my_course_recently_viewed_card_grid",
    CURICULUM_COURSE_CARD_GRID = "curiculum_course_card_grid"
}

export enum CardGridTypes {
    INFINITE_CARD_GRID = "infinite_grid"
}

export enum CourseCardTypes {
    RECENTLY_VIEWED = 'recently_viewed',
    MY_COURSE_CARD = 'my_course_card'
}

export enum LibraryCardGridTypes {
    INFINITE_CARD_GRID = 'infinite_card_grid',
    INFINITE_CARD_GRID_WITH_HOVER = 'infinite_card_grid_with_hover'
}

export enum LibraryCardStackTypes {
    INFINITE_CARD_STACK = 'infinite_card_stack'
}

export enum TocCardType {
    TEXTBOOK = 'textbook',
    COURSE = 'course',
    TRACKABLE = 'trackable',
    NON_TRACKABLE = 'non_trackable'
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
    hoverData?: any; // for card hover data
    primaryCategory?: string;
}

export interface ICourse {
        ownershipType: string[];
        copyright: string;
        board?: string;
        channel: string;
        downloadUrl: string;
        organisation: string[];
        language: string[];
        mimeType: string;
        variants: any;
        leafNodes: string[];
        objectType: string;
        appIcon: string;
        children: string[];
        appId: string;
        contentEncoding: string;
        lockKey: string;
        totalCompressedSize: number;
        mimeTypesCount: string;
        contentType: string;
        contentCredits: string;
        identifier: string;
        lastUpdatedBy: string;
        audience: string[];
        visibility: string;
        toc_url: string;
        contentTypesCount: string;
        consumerId: string;
        childNodes: string[];
        mediaType: string;
        osId: string;
        graph_id: string;
        nodeType: string;
        lastPublishedBy: string;
        version: number;
        license: string;
        prevState: string;
        lastPublishedOn: string;
        size: number;
        IL_FUNC_OBJECT_TYPE: string;
        name: string;
        topic: string[];
        c_diksha_load_open_batch_count: number;
        status: string;
        code: string;
        purpose: string;
        prevStatus: string;
        description: string;
        medium: string;
        idealScreenSize: string;
        createdOn: string;
        reservedDialcodes: string;
        copyrightYear: number;
        contentDisposition: string;
        lastUpdatedOn: string;
        SYS_INTERNAL_LAST_UPDATED_ON: string;
        dialcodeRequired: string;
        creator: string;
        createdFor: string[];
        lastStatusChangedOn: string;
        IL_SYS_NODE_TYPE: string;
        os: string[];
        pkgVersion: number;
        versionKey: string;
        idealScreenDensity: string;
        framework: string;
        depth: number;
        s3Key: string;
        dialcodes: string[];
        lastSubmittedOn: string;
        createdBy: string;
        compatibilityLevel: number;
        leafNodesCount: number;
        IL_UNIQUE_ID: string;
        resourceType: string;
        node_id: number;
}

export interface IHoverData {
    note?: string;
    actions: any;
    hoverData: any;
}

export enum FlattenedType {
    EXPAND = 'expand',
    COLLAPSE = 'collapse'
}

export interface IButtonConfig {
    label?: string;
    show?: boolean;
}

export enum PlatformType {
    PORTAL = 'portal',
    MOBILE = 'mobile'
}

export enum NotificationStatus {
    READ = 'read',
    UNREAD = 'unread'
}

export interface NotificationViewConfig{
    title: string;
    subTitle: string;
    clearText: string;
    moreText: string;
    lessText: string;
    minNotificationViewCount: number;
}

export enum ExpandMode {
    SINGLE = 'single',
    MULTIPLE = 'multiple'
}
export enum ExpandBehavior {
    NONE = 'none',
    EXPAND_FIRST = 'expand-first'
}
export interface IAccordianConfig {
    expandMode: ExpandMode;
    expandBehavior: ExpandBehavior;
}

export enum ButtonPosition {
    TOP = "top",
    RIGHT = "right",
    BOTTOM = "bottom"
}
