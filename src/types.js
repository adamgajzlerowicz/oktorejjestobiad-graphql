type Hungry = "YES" | "NO" | "MAYBE";

type Team = 'oneOThree' | 'oneOFive';

type AppType = {
    lunchAt: string,
    oneOThree: Hungry,
    oneOFive: Hungry,
};

export type {
    AppType, Hungry, Team
};