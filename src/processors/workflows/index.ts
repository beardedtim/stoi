import * as wf from "@temporalio/workflow";

export const unblockSignal = wf.defineSignal("unblock");
export const isBlockedQuery = wf.defineQuery<boolean>("isBlocked");

/**
 * A string that points at a URL for the browser
 * to go record at. Must contain all needed information
 * needed for the browser and cannot depend on any
 * cookies or headers being sent
 */
type URLString = string;

export interface JobConfig {
  url: URLString;
}

export const browserRecording = async ({ url }: JobConfig): Promise<void> => {
  console.log("Started!", url);

  await wf.sleep("1 minute");

  console.log("Ended!");
};
