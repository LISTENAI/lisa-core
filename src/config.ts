export interface Configuration {
  toConfig(): string
}

export class firmwareConfiguration implements Configuration {
  toConfig() {
    return "ssss"
  }
}