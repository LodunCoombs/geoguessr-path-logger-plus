
declare global {
  interface Window {
    __GPL_GAME_ID: string | null;
    __GPL_HAS_GUESSED: boolean;
    __GPL_HIJACKED: boolean;
    __WS_ROUND?: number;
    google: typeof google;
  }
}

export {};
