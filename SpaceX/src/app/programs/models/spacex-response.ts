export interface SpacexResponse {
    flight_number: number;
    mission_name: string;
    mission_id: [];
    upcoming: boolean;
    launch_year: string;
    launch_date_unix: number;
    launch_date_utc: Date;
    launch_date_local: Date;
    is_tentative: boolean;
    tentative_max_precision: string;
    tbd: boolean;
    launch_window: number;
    rocket: Rocket;
    ships: [];
    telemetry: Telemetry;
    launch_site: LaunchSite;
    launch_success: boolean;
    launch_failure_details: LaunchFailDetails;
    links: Links;
    details: string;
    static_fire_date_utc: string;
    static_fire_date_unix: number;
    timeline: TimeLine;
    crew: null
}

export interface TimeLine {
    webcast_liftoff: number;
}

export interface LaunchFailDetails {
    time: number;
    altitude: boolean;
    reason: string;
}

export interface Links {
    mission_patch: string;
    mission_patch_small: string;
    reddit_campaign: boolean;
    reddit_launch: boolean;
    reddit_recovery: boolean;
    reddit_media: boolean;
    presskit: boolean;
    article_link: string;
    wikipedia: string;
    video_link: string;
    youtube_id: string;
    flickr_images: string[];
}
export interface Telemetry {
    flight_club: null
}

export interface LaunchSite {
    site_id: string;
    site_name: string;
    site_name_long: string;
}

export interface Rocket {
    rocket_id: string;
    rocket_name: string;
    rocket_type: string;
    first_stage: Cores;
    second_stage: SecondStage;
    fairings: Fairings;
}

export interface Cores {
    cores: Core[];
}

export interface Core {
    core_serial: string;
    flight: number;
    block: number;
    gridfins: boolean;
    legs: boolean;
    reused: boolean;
    land_success: boolean;
    landing_intent: boolean;
    landing_type: boolean;
    landing_vehicle: null
}

export interface SecondStage {
    block: number;
    payloads: Payloads[];
}

export interface Fairings {
    reused: boolean;
    recovery_attempt: boolean;
    recovered: boolean;
    ship: null
}

export interface Payloads {
    payload_id: string;
    norad_id: [];
    reused: boolean;
    customers: string[];
    nationality: string;
    manufacturer: string;
    payload_type: string;
    payload_mass_kg: number;
    payload_mass_lbs: number;
    orbit: string;
    orbit_params: OrbitParams;
}

export interface OrbitParams {
    reference_system: string;
    regime: string;
    longitude: boolean;
    semi_major_axis_km: boolean;
    eccentricity: boolean;
    periapsis_km: number;
    apoapsis_km: number;
    inclination_deg: number;
    period_min: boolean;
    lifespan_years: boolean;
    epoch: boolean;
    mean_motion: boolean;
    raan: boolean;
    arg_of_pericenter: boolean;
    mean_anomaly: null
}