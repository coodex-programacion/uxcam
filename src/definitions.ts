export interface UXCamPlugin {
  echo(options: { value: string }): Promise<{ value: string }>;
}
