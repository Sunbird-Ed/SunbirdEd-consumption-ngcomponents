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
    medium?: string | string[];
    gradeLevel: string[];
    badgeAssertions: IBadge[];
    subject: string | string[];
    resourceType: string;
    creator?: string;
    organisation?: string[];
}
