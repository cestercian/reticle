/**
 * The active recording a refused `reticle_flow_save` was most likely about: the one it named, or
 * the only one running when it named none and nothing is stopped yet.
 */
// A running recording has no compiled program yet, so a save refusal names it (#1551).
export function stillRecording(
  active: readonly string[],
  name: string,
  explicitName: string | undefined,
  held: readonly string[],
): string | undefined {
  if (active.includes(name)) return name;
  if ((explicitName === undefined || 0 === explicitName.length) && 0 === held.length) {
    return 1 === active.length ? active[0] : undefined;
  }
  return undefined;
}

export function stillRecordingMessage(recording: string): string {
  return (
    `'${recording}' is still recording, and flow_save only saves a stopped recording. ` +
    `Stop it first with reticle_record{action:"stop", recordingName:"${recording}"}, then save again.`
  );
}
