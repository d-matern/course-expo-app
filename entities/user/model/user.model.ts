export interface UserModel {
    id: number;
    name: string;
    surname: string | null;
    enFullName: string | null;
    gender: string | null;
    photo: string | null;
    role: string;
    jobTitle: string | null;
    description: string | null;
    interests: [];
    skills: [];
    chips: number;
    email: string;
    openAiTokenUsages: number;
    openAiTokenLimit: number;
    passwordHash: string;
    discordId: string | null;
    telegramId: string | null;
    telegramUsername: string | null;
    inDiscord: boolean;
    inTelegram: boolean;
    utm_source: string | null;
    utm_medium: string | null;
    utm_campaign: string | null;
    utm_content: string | null;
    utm_term: string | null;
    cl_uid: string | null;
    pid: string | null;
    click_id: string | null;
    referrer: string;
    githubUrl: string | null;
    referralId: string | null;
    restoreTokenHash: string | null;
    telegramNotifications: boolean;
    createdAt: string;
    updatedAt: string;
    isService: boolean;
    profileStatus: string;
    githubProfile: string | null;
    telegramProfile: string | null;
}

export interface UserResponseModel {
    profile: UserModel;
    balances: {
        default: number;
        referral: number;
    };
    activity: string | null;
    achievements: [
        {
            id: number;
            title: string;
            alias: string;
            icons: {
                active: string;
                disabled: string;
            };
            text: string;
            event: string;
            necessaryProgress: number;
            createdAt: string;
            updatedAt: string;
            status: string;
        },
    ];
    skillTreeProgress: {
        total: number;
        passed: number;
        percent: number;
    };
}
