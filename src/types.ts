export interface Launch {
    flight_number: number;
    mission_name: string;
    launch_year: string;
    details: string | null;
    launch_success: boolean;
}