// src/mockApi.ts
import type { Launch } from './types';

/**
 * 模拟 SpaceX API 数据
 */
const mockLaunches: Launch[] = [
  {
    flight_number: 1,
    mission_name: "FalconSat",
    launch_year: "2006",
    details: "First successful test flight of the Falcon 9.",
    launch_success: false,
  },
  {
    flight_number: 2,
    mission_name: "DemoSat",
    launch_year: "2007",
    details: "Second flight, tested new components.",
    launch_success: false,
  },
  {
    flight_number: 3,
    mission_name: "Trailblazer",
    launch_year: "2008",
    details: "Third flight, first successful orbital launch.",
    launch_success: true,
  },
  {
    flight_number: 4,
    mission_name: "Ratsat",
    launch_year: "2008",
    details: "Fourth flight, commercial payload.",
    launch_success: true,
  },
  {
    flight_number: 5,
    mission_name: "Falcon 1 Flight 3",
    launch_year: "2008",
    details: "The rocket reached space but failed to achieve orbit due to a stage separation issue.",
    launch_success: false
  },
  {
    flight_number: 6,
    mission_name: "Falcon 1 Flight 4",
    launch_year: "2008",
    details: "This mission marked SpaceX’s first successful orbital launch.",
    launch_success: true
  },
  {
    flight_number: 7,
    mission_name: "Falcon 9 First Orbital Test Flight",
    launch_year: "2010",
    details: "Falcon 9 successfully reached orbit on its maiden flight.",
    launch_success: true
  },
  {
    flight_number: 8,
    mission_name: "Falcon 9 CRS-1",
    launch_year: "2012",
    details: "The first Commercial Resupply Services mission delivered cargo to the ISS.",
    launch_success: true
  },
  {
    flight_number: 9,
    mission_name: "Falcon 9 CRS-7",
    launch_year: "2015",
    details: "The mission failed after a second-stage structural failure during ascent.",
    launch_success: false
  },
  {
    flight_number: 10,
    mission_name: "Falcon 9 First Successful Land Landing",
    launch_year: "2015",
    details: "Falcon 9 achieved the first successful land landing of an orbital-class booster.",
    launch_success: true
  },
  {
    flight_number: 11,
    mission_name: "Falcon 9 First Drone Ship Landing",
    launch_year: "2016",
    details: "The booster successfully landed on an autonomous drone ship at sea for the first time.",
    launch_success: true
  },
  {
    flight_number: 12,
    mission_name: "Falcon Heavy Test Flight",
    launch_year: "2018",
    details: "Falcon Heavy completed its maiden flight with two boosters landing successfully.",
    launch_success: true
  },
  {
    flight_number: 13,
    mission_name: "Crew Dragon Demo-2",
    launch_year: "2020",
    details: "Crew Dragon safely launched astronauts to the International Space Station.",
    launch_success: true
  },
  {
    flight_number: 14,
    mission_name: "Falcon 9 Starlink Anomaly",
    launch_year: "2021",
    details: "A Falcon 9 mission experienced an in-flight anomaly leading to mission failure.",
    launch_success: false
  },
  {
    flight_number: 15,
    mission_name: "Falcon 9 Booster Reuse Milestone",
    launch_year: "2022",
    details: "A Falcon 9 booster achieved a record-breaking reuse milestone with a successful landing.",
    launch_success: true
  },
  {
    flight_number: 16,
    mission_name: "Falcon Heavy National Security Mission",
    launch_year: "2022",
    details: "Falcon Heavy successfully delivered a national security payload into orbit.",
    launch_success: true
  },
  {
    flight_number: 17,
    mission_name: "Falcon 9 Second Stage Engine Shutdown",
    launch_year: "2023",
    details: "A second-stage engine shutdown resulted in partial mission failure.",
    launch_success: false
  },
  {
    flight_number: 18,
    mission_name: "Crew Dragon ISS Rotation Mission",
    launch_year: "2023",
    details: "Crew Dragon completed another successful crew rotation mission to the ISS.",
    launch_success: true
  },
  {
    flight_number: 19,
    mission_name: "Falcon 9 Booster Landing Failure",
    launch_year: "2023",
    details: "The payload was deployed successfully, but the booster failed to land due to engine issues.",
    launch_success: false
  },
  {
    flight_number: 20,
    mission_name: "Falcon Heavy Multi-Payload Mission",
    launch_year: "2023",
    details: "Falcon Heavy successfully launched multiple payloads into orbit.",
    launch_success: true
  },
  {
    flight_number: 21,
    mission_name: "Falcon 9 Routine Starlink Deployment",
    launch_year: "2024",
    details: "Falcon 9 completed a routine Starlink satellite deployment with a successful landing.",
    launch_success: true
  },
  {
    flight_number: 22,
    mission_name: "Falcon 9 Starlink Booster Loss",
    launch_year: "2024",
    details: "The mission deployed satellites, but the booster was lost during landing.",
    launch_success: false
  },
  {
    flight_number: 23,
    mission_name: "Starship Integrated Test Flight",
    launch_year: "2024",
    details: "Starship achieved stage separation but was lost during ascent.",
    launch_success: false
  },
  {
    flight_number: 24,
    mission_name: "Falcon 9 High-Cadence Starlink Mission",
    launch_year: "2024",
    details: "Falcon 9 reinforced launch cadence reliability with a fully successful mission.",
    launch_success: true
  }
  // ... more data
];

/**
 * 模拟 API 调用，返回一个 Promise<Launch[]>
 * @returns {Promise<Launch[]>} 发射数据数组
 */
export const fetchLaunchData = (): Promise<Launch[]> => {
  return new Promise((resolve) => {
    // 模拟网络延迟
    setTimeout(() => {
      resolve(mockLaunches);
    }, 1000);
  });
};